"use strict"


import _ from 'lodash'

class ResourceController {
	constructor(model) {
		this.model = model 
	}
}
let populateSelectQuery = (query, populates, select) => {
	if(populates != null){
		for(let i = 0; i < populates.length; i++){
			query.populate(populates[i])
		}
	}
	if(select != null) query.select(select)
	return query
}

ResourceController.prototype.create = function(req, res) {
	this.model
		.create(req.body.payload)
		.then(result =>  {
			res.send(result)
		})
		.catch(err =>  {
			res.status(500).json( {
				message:"Error creating resource", 
				err:err
			}) 
		}) 	
}

ResourceController.prototype.findAll = function(req, res) {
	let query = this.model
		.find(req.body.query)

	let resultQuery = populateSelectQuery(query, req.body.populates, req.body.select)
	let countQuery = _.clone(resultQuery)

	countQuery.count().then(count => {
		
		resultQuery.skip(parseInt(req.body.perPage) * (req.body.pageNo - 1))
			.limit(parseInt(req.body.perPage))
			.then(result =>  {
				res.send( {
					// currentPage: req.body.pageNo, 
					result: result,
					total: count,
					// maxPage: Math.ceil(total / req.body.perPage)
				}) 
			})
			.catch(err =>  {
				res.status(500).json( {
					message:"Error fetching resource", 
					err:err
				}) 
			}) 
	})
} 

ResourceController.prototype.findByID = function(req, res) {
	let query = this.model
		.findOne({
			_id:  req.params.id
		})

	let resultQuery = populateSelectQuery(query, req.body.populates, req.body.select)
	resultQuery.then(result => res.send(result))
		.catch(err =>  {
			res.status(404).json( {
				message:`Requested id not found`, 
				err:err
			})
		})
}

ResourceController.prototype.retrieve = function(req, res) {
	let query = this.model
		.find({})
	
	let resultQuery = populateSelectQuery(query, req.body.populates, req.body.select)
	let countQuery = _.clone(resultQuery)
	let paginate = true

	countQuery.count().then(count => {
		if(req.body.paginate != null){
			paginate = req.body.paginate == '1'
		} 
		if(paginate){
			resultQuery.skip(parseInt(req.body.perPage) * (req.body.pageNo - 1))
				.limit(parseInt(req.body.perPage))	
		}
		
		resultQuery
			.then(result =>  {
				res.send( {
					// currentPage: req.body.pageNo, 
					result: result,
					total: count,
					// maxPage: Math.ceil(total / req.body.perPage)
				}) 
			})
			.catch(err =>  {
				res.status(500).json( {
					message:"Error fetching resource", 
					err:err
				}) 
			}) 
	})
}

ResourceController.prototype.update = function(req, res) {
	this.model
		.findByIdAndUpdate(req.params.id, req.body.payload, {new: true})
		.then(newObj => res.send(newObj))
		.catch(err =>  {
			res.status(500).json( {
				message:"Error Updating resource", 
				err:err
			}) 
		}) 
} 

ResourceController.prototype.delete = function(req, res) {
	this.model
		.findByIdAndRemove(req.params.id)
		.then(() => res.status(200).json(`Requested id:$ {req.params.id}is deleted`))
		.catch(err =>  {
			res.status(500).json( {
				message:'Error Removing Organization', 
				err:err
			})
		})
}

export default ResourceController
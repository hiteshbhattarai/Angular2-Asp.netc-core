"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/Rx');
var DepartmentService = (function () {
    function DepartmentService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:12606/api/Departments";
    }
    DepartmentService.prototype.getAllDepartments = function (page, perPageItems) {
        var headers = new http_1.Headers();
        headers.append('Access-Control-Allow-Headers', 'Content-Type');
        headers.append('Access-Control-Allow-Methods', 'GET');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:12606/api/departments');
        var options = new http_1.RequestOptions({ headers: headers });
        return (this.http.get(this.baseUrl + "?page=" + page + "&perPageItems=" + perPageItems, options)
            .map(function (response) { return (response.json()); })
            .catch(this.handleError));
    };
    DepartmentService.prototype.getSingleDepartment = function (id) {
        return (this.http.get(this.baseUrl + "/" + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError));
    };
    DepartmentService.prototype.addDepartment = function (model) {
        return (this.http
            .post(this.baseUrl, model)
            .map(function (response) { return response.json(); }));
    };
    DepartmentService.prototype.updateDepartment = function (model) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return (this.http
            .put(this.baseUrl, model, options)
            .map(function (response) { return response.json(); }));
    };
    DepartmentService.prototype.deleteDepartment = function (id) {
        return (this.http.delete(this.baseUrl + "/" + id));
    };
    DepartmentService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error || "Server Error");
    };
    DepartmentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DepartmentService);
    return DepartmentService;
}());
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=service.department.js.map
$(function () {
    console.log(app.data);
    $.each(app.data, function (index, element) {
        console.log(element.index);
    });


    //ViewModel
    app.ViewModel = {
        employeeList: ko.observableArray(app.data.emploees),
        Id: ko.observable(),
        Name: ko.observable(),
        Salary: ko.observable(),

        AddEmployee: function () {
            this.employeeList.push({Id: this.Id(), Name : this.Name(), Salary: this.Salary()})
        }

        
    };

    ko.applyBindings(app.ViewModel);
});


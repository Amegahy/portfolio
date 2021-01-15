/**
 * This is the description of this file.
 */
$(document).ready(function(){

    /**
     * Assign the project to an employee.
     * @param {Object} employee - The employee who is responsible for the project.
     * @param {string} employee.name - The name of the employee.
     * @param {string} employee.department - The employee's department.
     */
    $("a").click(function(){
        alert("$(this).text()");
    });
});
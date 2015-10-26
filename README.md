# ScalableAngularJSAppDemo
Food for thought: Please go through code in VS, Its a sample angular application, doesn't have that much of meat in it, 
a skeleton app which deals functionality like: 

- Directory Structure
- File Naming Convention
- Angular UI routing
- Angular UI Bootstrap 3 (Nothing that much has been done in terms of styling and look)
- Dependency Injection for each module (onBoardingApp.candidate.js file)
- Routing for each module (onBoardingApp.candidate.js file)
- For scalability using Controller AS feature for $scope replacement (Please check onBoardingApp.candidate.controller.js and onBoardingApp.candidate file) 
- Sample test factory (onBoardingApp.candidate.services.js file)



Usage of shared services in angularjs application containing mini SPA’s

For complete understanding, I have drawn a basic sequence diagram for flow:
1. Angular: Module Service (onboardingapp.candidate.controller.js)
  ..* Invoke your service layer for this module​ and will contain .success and .error content of each request
- Angular: Module Service (onboardingapp.candidate.services.js)
  ..* This will serve as abstraction layer for underlying implemntation, Just pass URL, Request Type, Parameter Object
- Angular: Global Service (appModule.JS)
  ..* This will contain shared/global service which will be consumed by all modules for executing CRUD operation,
       Request Type, URL, Parameter Object will be passed to this shared service, so it will make code more maintainable
  ..* readable and scalable​. If we dont go through this method then we have to use $http.get() or $http.post method
  ..* every where in services files of each module, content negotiation issues can be simply handled over here,
  ..* If you want to append anything with each URL like ‘Http:\\mydomain\’ then instead of copy it on every service file
  ..* just hard-code this thing in this file and append URL from their respective services.
  ..* We don’t need to mention protocol and host-name now in every URL request.

For further clarification I have mentioned case of second module, how its controller and service will utilize this global service file.

![mail-google-com](https://cloud.githubusercontent.com/assets/10474169/10745064/6a0a1ca0-7c0c-11e5-83f4-a3379257559c.png)

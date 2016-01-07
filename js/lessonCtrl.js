angular.module('directivePractice')
    .controller('mainCtrl', function ($scope) {
        $scope.test = "TWO WAY DATA BINDING!";
        $scope.lessons = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
        $scope.announceDay = function(lesson,day){
            alert(lesson + ' is active on ' + day + '.')
        }


    })
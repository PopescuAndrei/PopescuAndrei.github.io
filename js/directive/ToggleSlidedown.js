fboApp.directive('toggleSlidedown', function(){
    return {
        restrict: 'A',
        link: function (scope, elem, attrs, ctrl) {
            if ('down' == attrs.slidedownInit){
                elem.css('display', '');
            } else {
                elem.css('display', 'none');
            }
            scope.$watch(attrs.toggleSlidedown, function (val) {
                var duration = _.isUndefined(attrs.slidedownDuration) ? 150 : attrs.slidedownDuration;
                if (val) {
                    elem.slideDown(duration);
                } else {
                    elem.slideUp(duration);
                }
            });
        }
    }
});
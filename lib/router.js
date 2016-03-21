/*
ROUTER CONFIGURATION
*/
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
        return Meteor.subscribe('images');
    }
});

/*
ROUTES
*/
Router.route('/', {name: 'carousel'});
Router.route('/admin', {name: 'admin'});

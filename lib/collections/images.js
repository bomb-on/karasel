Images = new Mongo.Collection('images');
/*
Instances.allow({
    update: function(userId, instance) { return ownsDocument(userId, instance); },
    remove: function(userId, instance) { return ownsDocument(userId, instance); },
});
*/

Images.allow({
    update: function(userId, instance) { return true; },
    remove: function(userId, instance) { return true; },
    insert: function(userId, instance) { return true; },
});

Meteor.methods({
    imageInsert: function(postAttributes) {
        console.log(postAttributes);
        /*
        check(Meteor.userId(), String);
        check(postAttributes, {
            title: String,
            url: String
        });

        var recipeWithSameLink = Recipes.findOne({url: postAttributes.url});
        if (recipeWithSameLink) {
            return {
                recipeExists: true,
                _id: recipeWithSameLink._id
            }
        }

        var user = Meteor.user();
        var author;
        if (user.profile.name) {
            author = user.profile.name;
        } else {
            author = 'Anonymous author';
        }
        var recipe = _.extend(postAttributes, {
            userId: user._id,
            author: author,
            //author: user.username,
            submitted: new Date()
        });
        var recipeId = Recipes.insert(recipe);
        return {
            _id: recipeId
        };
        */
    }
});

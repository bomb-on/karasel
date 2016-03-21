Meteor.startup(function () {
    UploadServer.init({
        tmpDir: process.env.PWD + '/.uploads/tmp',
        uploadDir: process.env.PWD + '/.uploads/',
        checkCreateDirectories: true,
        finished: function (fileInfo, formData) {
            Images.insert({
                src: fileInfo.url,
                order: Images.find().count()+1
            });
            /*
            Meteor.setTimeout(function () {
                var upload = Uploads.findOne({path: fileInfo.path});
                MyCollection.update({_id: formData._id}, {$push: {uploads: upload._id}});
            }, 1000);
            */
        }
    });
});
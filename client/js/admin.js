Template.admin.created = function() {
    $('body').css('-moz-user-select', 'none');
    $('body').css('-khtml-user-select', 'none');
    $('body').css('-webkit-user-select', 'none');
    $('body').css('user-select', 'none');

};

Template.admin.helpers({
    imgs: function () {
        return Images.find({}, {sort: {order: 1}});
    }
});

Template.img.rendered = function () {
    $('.admin-img img').each(function(i, item) {
        var img_height = $(item).height();
        var div_height = $(item).parent().height();
        if(img_height<div_height){
            //IMAGE IS SHORTER THAN CONTAINER HEIGHT - CENTER IT VERTICALLY
            var newMargin = (div_height-img_height)/2+'px';
            $(item).css({'margin-top': newMargin });
        } else if(img_height>div_height){
            //IMAGE IS GREATER THAN CONTAINER HEIGHT - REDUCE HEIGHT TO CONTAINER MAX - SET WIDTH TO AUTO
            $(item).css({'width': 'auto', 'height': '100%'});
            //CENTER IT HORIZONTALLY
            var img_width = $(item).width();
            var div_width = $(item).parent().width();
            var newMargin = (div_width-img_width)/2+'px';
            $(item).css({'margin-left': newMargin});
        }
    });
    $('#sortable').sortable({
        update: function( event, ui ) {
            var sorted = $('#sortable').sortable('toArray', {attribute: 'data-id'});
            for (var i = 0; i < sorted.length; i++) {
               Images.update(sorted[i], {
                   $set: {order: i+1}
               })
            }
        }
    });
};


Template.dropzone.helpers({
    'infoLabel': function() {
        return 'DROP IMAGE ANYWHERE!';
    }
});
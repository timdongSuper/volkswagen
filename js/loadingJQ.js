$.fn.extend({
    loading:function(options,callback) {
        var ops={
            color:"",
            imgs: [],
            timer:500
        }
        var ops=$.extend(ops,options);
        // alert($(this).attr("id"))
        var progress = $('<div class="progress"><span class="'+ops.color+'"><span>0%</span></span></div>');
        var index = 0;
        progress.css({
        	position: "absolute",
			top: "45%",
			width: "80%",
			left: 0,
			right: 0,
			margin: "auto"
        })
        for (var i = 0; i < ops.imgs.length; i++) {
        	var img = new Image();
        	img.src = ops.imgs[i];

        	img.onload = function(){
        		index++;
        		// alert(index);
        		var p = parseInt((index/ops.imgs.length)*100) + "%";
        		progress.children().width(p);
                progress.children().css("transition","0.1s");
        		progress.children().children().html(p);
        		if (index==ops.imgs.length) {
        			setTimeout(function(){
        				callback();
        			},ops.timer)
        			
        		};
        	}
        };

        $(this).append(progress);

        // alert($(this).attr("id"));

    }
}); 
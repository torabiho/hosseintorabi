/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
var flag = false;
   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         /***************************************************************************
         									Data Entrance
         ***************************************************************************/
         // Only show 10 bubbles [1,10,12,19,24,27,28,35,41,42]
         var BubbleCountClass = sym.$(".bubbles10");
         
         var mouseState = 1; //mouse hover is on
         var primarySelect = 0; //primary column selection state off
         var legendState = 0; //legend unselected
         var multiSelectState = 0; //multiSelect state is off
         
         // get the number categories in the legend
         var selectedLegCount = 0;
         
         var chartOffset = $("#Stage_chartFrame").offset();
         $("#Stage_chartFrame").prependTo("#grid");
         
         resetLegend();
         
         sym.$(BubbleCountClass.sort(function (a, b)
         {
         	//returns columns from highest to lowest value
            return $(a).height() < $(b).height() ? 1 : -1;  
         	}).get()).each(function(i, obj)
         	{
         		var currentBubble = sym.$(this);
         		var ht = sym.$(this).height();
         
         		//get rgb values
               var rgb = getColorArray(currentBubble)
         
         		//adds state attributes to columns
         		$(currentBubble).attr('state',0);
               $(currentBubble).css({ 'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.85)',
               							  'border-color': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0)'});
         
         		//delay animation individually
         		setTimeout(function()
         		{
         			if(ht <= 50)
         			{
         				$(currentBubble).css({ 'transition': '0.5s ease',
         											'transform': 'scale(1)'
         										});
         			}
         			else if(ht >= 51 && ht <= 100)
         			{
         				$(currentBubble).css({ 'transition': '0.6s ease',
         											'transform': 'scale(1)'
         										});
         			}
         			else if(ht >= 101 && ht <= 200)
         			{
         				$(currentBubble).css({ 'transition': '0.8s ease',
         											'transform': 'scale(1)'
         										});
         			}
         			else if(ht >= 201 && ht <= 300)
         			{
         				$(currentBubble).css({ 'transition': '1.3s ease',
         											'transform': 'scale(1)'
         										});
         			}
         			else
         			{
         				$(currentBubble).css({ 'transition': '1.1s ease',
         												'transform': 'scale(1)'
         											});
         			}
         		 },200 + ( i * 55 ));
         });
         
         /***************************************************************************
         									Bubble Hover
         ***************************************************************************/
         
         sym.$(BubbleCountClass).mouseenter(
         	function(obj)
         	{
         		var currentBubble = sym.$(this);
         
               addBorderHover(currentBubble); //add border to column
               showValue(currentBubble); //show value on axis
         
            }
            /*, function(){//enter more functions here}*/
         ); 
         
         
         /*************************************************************************/
         /**                          Bubble exit hover                          **/
         /*************************************************************************/
         
         sym.$(BubbleCountClass).mouseleave(
         	function(obj)
         	{
               var rgb = getColorArray(sym.$(this)); //get rgb values
               exitHover(sym.$(this));  //hide borders   
            }
         );
         
         /***************************************************************************
         									legend Hover
         ***************************************************************************/
         
         sym.$('.legend').mouseenter(
         	function(obj)
         	{
         		//gets color element of selected legend
         		var currLeg = sym.$(this).children('.legCol');
         
               legendHover(currLeg); //add border to column
         
            }
         
         ); 
         
         /*************************************************************************/
         /**                          legend exit hover                          **/
         /*************************************************************************/
         
         sym.$('.legend').mouseleave(
         	function(obj)
         	{
               var rgb = getColorArray(sym.$(this)); //get rgb values
               //gets color element of selected legend
         		var currLeg = sym.$(this).children('.legCol');
               legendExitHover(currLeg);  //hide borders   
            }
         );
         
         /*************************************************************************/
         /**                          primary selection                          **/
         /*************************************************************************/
         
         sym.$(BubbleCountClass).click(
         	function(obj)
         	{
         		var clickedBubble = sym.$(this); //selected bubble
         		var clickedBubPos = sym.$(this).position();
               $(clickedBubble).attr('state',1); //change state to selected
               addBorderClick(clickedBubble); //add border to column
         		showValue(clickedBubble);
         		$('#Stage_vDottedLine').css({ 'transition' : '0.4s',									 
         									 'left': clickedBubPos.left + chartOffset.left + (clickedBubble.outerWidth()/2),
               							 'opacity': '0.6'
                							});
         
               $('#Stage_hDottedLine').css({ 'transition' : '0.4s',
         									 'top': clickedBubPos.top + chartOffset.top + (clickedBubble.outerHeight()/2),
               							 'opacity': '0.6'
                							});
         
         
         		sym.$(BubbleCountClass).each(
         			function(i, obj)
         			{  
                     var currentBubble = sym.$(this); //gets CURRENT column
         
         				//checks if SELECTED column id = CURRENT column id
         				if(clickedBubble[0].id != currentBubble[0].id)
         				{	 
                        $(currentBubble).attr('state',0); //change state to unselected 
                        primarySelectFade(currentBubble); //fade unselected column
         
         				}
         			}
         		);	
         
               //turn off hover over column
               $(BubbleCountClass).off('mouseenter');
               $(BubbleCountClass).off('mouseleave');
         
               mouseState = 0; //mouse hover is off 
               primarySelect = 1; //primary column selection on  
               legendState = 0; //legend not active
               multiSelectState = 0; //multiSelect state is off
         	}
         );
         
         
         /*************************************************************************/
         /**                          deslecting Bubbles                         **/
         /*************************************************************************/
         
         sym.$('#Stage_chartFrame').click(
         	function(e)
         	{
         		if (!BubbleCountClass.is(e.target) // if the target of the click isn't the container...
         	  && BubbleCountClass.has(e.target).length === 0) // ... nor a descendant of the container
          		{
         
         			//checks if mouse hover is off
         			if(mouseState === 0)
         			{ 
         				mouseState = 1; //turn mouse hover on
         
         				//turn on mouse enter trigger
         				$(BubbleCountClass).on('mouseenter',
         					function(obj)
         					{  
         						var currentBubble = sym.$(this);       	
         						addBorderHover(currentBubble); //add border to column
         						showValue(currentBubble); //show value on axis
         					}	
         				);
         
         				//turn on mouse leave trigger
         				$(BubbleCountClass).on('mouseleave',
         					function(obj)
         					{
         						var rgb = getColorArray(sym.$(this));
         						exitHover(sym.$(this));
         					}	
         				);
         
         				sym.$(BubbleCountClass).each(
         					function(i, obj)
         					{	
         						var currentBubble = sym.$(this); //CURRENT column 
         						$(currentBubble).attr('state',0); //change state of all columns to unselected
         						originalState(currentBubble); //change column back to original style
         					}
         				);
         
         				resetLegend();
         
         				legendState = 0; ///legend not active
         				primarySelect = 0; //primary column selection off
         				multiSelectState = 0; //multiSelect state is off  
         			}
         		}
         	}
         );
         
         
         /*************************************************************************/
         /**                           legend selection                          **/
         /*************************************************************************/
         sym.$('.legend').click(
         	function(obj)
         	{
         		//gets color element of selected legend
         		var currLeg = sym.$(this).children('.legCol');
         
         		if($(currLeg).attr('state') != 1)
         		{  
         			selectedLegCount++;
         			$(currLeg).attr('state',1); //change state to selected
         		}else{
         			selectedLegCount--;
         			$(currLeg).attr('state',0); //change state to NOT selected
         		}
         
         		sym.$('.legCol').each(
         			function()
         			{
         					if(sym.$(this).attr('state') == 1)
         					{  
         						legendInteractionSelect(sym.$(this));
         					}else{
         						legendInteractionDeselect(sym.$(this));
         					}		
         			}
         		);
         
         		if(selectedLegCount == 0)
         		{
         			resetLegend();
         		}
         
         		//gets rgba of color
         		var legColor = currLeg[0].style.borderColor;
         
               //axis labels disappear
         		$('.vLabelHov').css({ 'transition' : '0.4s',
         					 'opacity': '0'
         					});
         
         		$('.hLabelHov').css({ 'transition' : '0.4s',
         					  'opacity': '0'
         					});
         
         
         
               //turn off mouse enter trigger
               $(BubbleCountClass).off('mouseenter');
               $(BubbleCountClass).off('mouseleave');
         
         		sym.$(BubbleCountClass).each(
         			function(i, obj)
         			{	
         				var currentBubble = sym.$(this);  //gets CURRENT column                
                     var rgb = getColorArray(currentBubble); //extracts rgba values
         				var newBubbleColor = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')'; //takes out opacity/alpha from rgb string
         
         				if(selectedLegCount == 0)
         				{
         						$(currentBubble).attr('state',0); //change state to not selected            
         						originalState(currentBubble); //change column back to original style
         				}else{
         					//compares if SELECTED legend color = CURRENT column color 
         					if(legColor == newBubbleColor)
         					{	
         
         						if($(currLeg).attr('state') != 1)
         						{  
         							$(currentBubble).attr('state',0); //change state to not selected
         							legendSelectFade(currentBubble); //fade columns with border                 
         						}else{
         							$(currentBubble).attr('state',1); //change state to selected            
         							originalState(currentBubble); //change column back to original style
         						}
         
         					}
         					else
         					{
         						//checks if legend was not previously selected - initial fade out of all other columns
         						//if legend already selected, do nothing.
         						if(legendState == 0)
         						{
         							$(currentBubble).attr('state',0); //change state of all columns to unselected
         							legendSelectFade(currentBubble); //fade columns with border
         						}
         					}	
         				}
         			}
         		);
         
         		if(selectedLegCount == 0)
         		{
         			legendState = 0;
         		}else{
         			legendState = 1; //legend is currently selected 
         		}
         
         		mouseState = 0; //mouse hover is off
               primarySelect = 0; //primary column selection is off
               multiSelectState = 0; //multiSelect state is off
         
         	}	 
         );
         
         /***************************************************************************
         									Multiselect
         ***************************************************************************/
         
         $("#grid").mousedown(function (e) {
         
         		$(document).css('user-select','none').prop('unselectable','on').on('selectstart',false);
         		var xPos = e.pageX ;
         		var yPos = e.pageY ;
         
         		  $("#big-ghost").remove();
         		  $(BubbleCountClass).removeClass('selected');
         		  //$('#Stage_chartFrame').removeClass('multiSelect');
         		  $(".ghost-select").addClass("ghost-active");
         		  $(".ghost-select").css({
         				'left': xPos,
         				'top': yPos
         		  });
         
         		  initialW = xPos;
         		  initialH = yPos;
         
         		  $(document).bind("mouseup", selectElements);
         		  $(document).bind("mousemove", openSelector);
         
         
          });
         
         
         function selectElements(e) {
         
             $(document).unbind("mousemove", openSelector);
             $(document).unbind("mouseup", selectElements);
         
         	 //turn off hover over column
         	 $(BubbleCountClass).off('mouseenter');
         	 $(BubbleCountClass).off('mouseleave');
         
         	 //dotted lines for click disappears		
         	$('#Stage_vDottedLine').css({ 'transition' : '0.4s',									 
         								 'opacity': '0'
         								});
         
         	$('#Stage_hDottedLine').css({ 'transition' : '0.4s',
         								 'opacity': '0'
         								});
         
         	//axis label disappears
         
         	$('.vLabelHov').css({ 'transition' : '0.4s',
         				 'opacity': '0'
         				});
         
         	$('.hLabelHov').css({ 'transition' : '0.4s',
         				  'opacity': '0'
         				});
         
         	resetLegend();
         
             $(BubbleCountClass).each(function () {
         
                 var aElem = $(".ghost-select");
                 var bElem = $(this);
                 var result = doObjectsCollide(aElem, bElem);
         		  var currentBG = $(bElem).css("background-color");
         		  var rgb = currentBG.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(',');
         
                 if (result == true) {
         					$(bElem).attr('state',1);
         					addBorderMultiSelect(bElem); //fade unselected column
         
         			}else{
         					$(bElem).attr('state',0); //change state to unselected 
                        multiSelectFade(bElem); //fade unselected bubbles
         			}
         
         	});
         
         		legendState = 0; //legend is currently selected 
         		mouseState = 0; //mouse hover is off
               primarySelect = 0; //primary column selection is off
               multiSelectState = 1; //multiSelect state is off
         
         	 $(".ghost-active").zIndex(-1);
             $(".ghost-select").removeClass("ghost-active");
             $(".ghost-select").width(0).height(0);
         }
         
         
         function openSelector(e) {	
         	 $(".ghost-active").zIndex(0);
         	 var newXPos = e.pageX 	
         	 var newYPos = e.pageY 
         
             var w = Math.abs(initialW - newXPos);
             var h = Math.abs(initialH - newYPos);
         
             $(".ghost-select").css({
                 'width': w,
                 'height': h
             });
             if (newXPos <= initialW && newYPos >= initialH) {
                 $(".ghost-select").css({
                     'left': newXPos
                 });
             } else if (newYPos <= initialH && newXPos >= initialW) {
                 $(".ghost-select").css({
                     'top': newYPos
                 });
             } else if (newYPos < initialH && newXPos < initialW) {
                 $(".ghost-select").css({
                     'left': newXPos,
                     "top": newYPos
                 });
             }
         }
         
         
         function doObjectsCollide(a, b) { // a and b are your objects
             //console.log(a.offset().top,a.position().top, b.position().top, a.width(),a.height(), b.width(),b.height());
             var aTop = a.offset().top;
             var aLeft = a.offset().left;
             var bTop = b.offset().top;
             var bLeft = b.offset().left;
         
             return !(
                 ((aTop + a.height()) < (bTop)) ||
                 (aTop > (bTop + b.height())) ||
                 ((aLeft + a.width()) < bLeft) ||
                 (aLeft > (bLeft + b.width()))
             );
         
         
         }  
         
         /*****************************************************************************
         						 move axis labels to bubble position
         ******************************************************************************/
         
         function showValue(obj)
         {
         
            var currBubPos = obj.position(); //get object position
         
            var vLabelHovHt = sym.$('.vLabelHov').height(); //get object height
         	var hLabelHovHt = sym.$('.hLabelHov').width(); //get object width
         
            //
         	 $('.vLabelHov').css({ 'transition' : '0.4s',
         								 'top': currBubPos.top + chartOffset.top + (obj.innerHeight()/2) - (vLabelHovHt/2) ,
         								 'opacity': '1'
         								});
         
         	 $('.hLabelHov').css({ 'transition' : '0.4s',
         								  'left': currBubPos.left + chartOffset.left + (obj.outerWidth()/2) - (hLabelHovHt/2) ,
         								  'opacity': '1'
         								});                       
         
            //update value on label
            $(".vValHov").text($('.vLabelHov').position().top.toFixed(1));
            $(".hValHov").text($('.hLabelHov').position().left.toFixed(1));
         
         }
         
         /*****************************************************************************
         									add border for bubble hover
         ******************************************************************************/
         function addBorderHover(obj)
         { 
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
            //adds border
            $(obj).css({ 'transition':'0.1s',
         						'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',1.0)',
         						'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,1.0)'
                        });
         }
         
         /*****************************************************************************
         							 remove border for bubble exit hover
         ******************************************************************************/
         function exitHover(obj)
         { 
            var rgb = getColorArray(obj); //get rgb values
         	var hsl = getHSLArray(rgb);
         
            //adds border
            $(obj).css({ 'transition':'0.1s',
         						'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.85)',
         						'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,0)'
                        });
         
         }
         
         /*****************************************************************************
         										legend hover
         ******************************************************************************/
         function legendHover(obj)
         { 
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
         
            //adds border
            $(obj).css({ 'transition':'0.1s',
         						'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',1.0)',
         						'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,1.0)'
                        });
         }
         
         /*****************************************************************************
         							 		legend exit hover
         ******************************************************************************/
         function legendExitHover(obj)
         { 
            var rgb = getColorArray(obj); //get rgb values
         	var hsl = getHSLArray(rgb);
         	var legOpacity = '1.0';
         	var legBorder = 0;
         
         	if (legendState == 1)
         	{
         		if($(obj).attr('state') == 1)
         		{
         			legOpacity = '1.0';
         			legBorder = 0;
         		}else
         		{
         			legOpacity = '0.1';
         			legBorder = 15;
         		}
         	}
         
            //adds border
            $(obj).css({ 'transition':'0.1s',
         						'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ','+ legOpacity +')',
         						'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-legBorder) + '%,1)'
                        });
         
         }
         
         /*****************************************************************************
         									add border for click
         ******************************************************************************/
         
         function addBorderClick(obj)
         {
         
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
            //set css background the same opactiy and show border
            $(obj).css({ 'transition':'0.4s',
         					'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.9)',
         					'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,1)'
                        });
         }
         
         /*****************************************************************************
         								add border for multiselect
         ******************************************************************************/
         
         function addBorderMultiSelect(obj){
         
         	var rgb = getColorArray(obj); //get rgb values
         	var hsl = getHSLArray(rgb);
         
         	$(obj).css({"transition" : "0.4s", 
         				  "background": "rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+",0.9)",
         				  '-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,0.9)'
         	});
         
         }
         
         /*****************************************************************************
         						fade unselected object from primary selection
         ******************************************************************************/
         function primarySelectFade(obj)
         {
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
            //set css background opacity low and make border transparent
            $(obj).css({ 'transition': '0.4s',
                           'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.3)',
                           '-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,0)'
                        });   
         }
         
         /*****************************************************************************
         						fade unselected object from legend selection
         ******************************************************************************/
         function legendSelectFade(obj)
         {
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
            //decrease background opacity and adds border
            $(obj).css({ 'transition': '0.7s',
                           'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.1)',
                           '-webkit-box-shadow': 'inset 0px 0px 0px 1px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,0.7)'
                        });  
         }
         
         /*****************************************************************************
         						fade unselected object from  multi-selection
         ******************************************************************************/
         function multiSelectFade(obj)
         {
         	var rgb = getColorArray(obj); //get rgb values
         	var hsl = getHSLArray(rgb);
         
            $(obj).css({'transition' : '0.4s', 
         			 		"background": "rgba("+rgb[0]+","+rgb[1]+","+rgb[2]+",0.3)",
         			 		'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,0)'
         			 		});
         }
         
         /*****************************************************************************
         						highlights object from  legend click
         ******************************************************************************/
         
         function legendInteractionSelect(obj) {	
         
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
            //adds border
            $(obj).css({ 'transition':'0.4s',
         						'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',1.0)',
         						'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]) + '%,1.0)'
                        });
         }
         
         /*****************************************************************************
         						fades object from  legend click
         ******************************************************************************/
         
         function legendInteractionDeselect(obj) {	
         
            var rgb = getColorArray(obj); //get rgb values
         	var hsl = getHSLArray(rgb);
            //adds border
            $(obj).css({ 'transition':'0.4s',
         						'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.1)',
         						'-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]) + '%,1.0)'
                        });
         
         
         }
         
         
         /*****************************************************************************
         						restore legend categories to their original state
         ******************************************************************************/
         
         function resetLegend() {
         	selectedLegCount = 0;
         	sym.$('.legCol').each(
         		function()
         		{
         			$(this).attr('state',0);
         			legendInteractionSelect(sym.$(this));
         		}
         	);
         }
         
         /*****************************************************************************
         						restore objects to original state
         ******************************************************************************/
         
         function originalState(obj)
         {
            var rgb = getColorArray(obj); //get rgb values
            var hsl = getHSLArray(rgb);
         
            //change css opacity back to original and make border transparent
            $(obj).css({ 'transition': '0.4s',
                           'background': 'rgba('+ (rgb[0]) +','+ (rgb[1]) +',' + (rgb[2]) + ',0.85)',
                           '-webkit-box-shadow': 'inset 0px 0px 0px 2px hsla('+ (hsl[0]) +','+ (hsl[1])+'%,' + (hsl[2]-15) + '%,0)'
                        });
         
         	//dotted lines for click disappears		
         	$('#Stage_vDottedLine').css({ 'transition' : '0.4s',									 
         								 'opacity': '0'
         								});
         
         	$('#Stage_hDottedLine').css({ 'transition' : '0.4s',
         								 'opacity': '0'
         								});
         }
         
         /******************************************************************************
         									functions for styling
         ******************************************************************************/
         
         function getHSLArray(obj)
         {
         	var hsl =  rgb2hsl(obj);
         	return hsl;
         }
         
         
         function getColorArray(obj)
         { 
            var objColor = $(obj).css('background-color'); //get color value of object
            var rgb = objColor.replace(/^(rgb|rgba)\(/,'').replace(/\)$/,'').replace(/\s/g,'').split(','); //extracts rgb value into array
            return rgb;
         }
         
         
         /*
         * Converts an RGB color to HSL
         * Parameters
         *     rgbArr : 3-element array containing the RGB values
         *
         * Result : 3-element array containing the HSL values
         *
         */
         function rgb2hsl(rgbArr){
             var r1 = rgbArr[0] / 255;
             var g1 = rgbArr[1] / 255;
             var b1 = rgbArr[2] / 255;
         
             var maxColor = Math.max(r1,g1,b1);
             var minColor = Math.min(r1,g1,b1);
             //Calculate L:
             var L = (maxColor + minColor) / 2 ;
             var S = 0;
             var H = 0;
             if(maxColor != minColor){
                 //Calculate S:
                 if(L < 0.5){
                     S = (maxColor - minColor) / (maxColor + minColor);
                 }else{
                     S = (maxColor - minColor) / (2.0 - maxColor - minColor);
                 }
                 //Calculate H:
                 if(r1 == maxColor){
                     H = (g1-b1) / (maxColor - minColor);
                 }else if(g1 == maxColor){
                     H = 2.0 + (b1 - r1) / (maxColor - minColor);
                 }else{
                     H = 4.0 + (r1 - g1) / (maxColor - minColor);
                 }
             }
         
             L = L * 100;
             S = S * 100;
             H = H * 60;
             if(H<0){
                 H += 360;
             }
             var result = [H, S, L];
             return result;
         }

      });
      //Edge binding end
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         //sym.$("legend").addClass("animated bounceInRight");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${exitB}", "click", function(sym, e) {
         // insert code for mouse click here
         
         /*************************************************************************/
         /**                              Data exit                              **/
         /*************************************************************************/
         sym.$($('.bubbles10').sort(function (a, b)
         {
             return $(a).height() < $(b).height() ? 1 : -1;  
         }).get()).each(function(i, obj)
         {
         var currentBub = sym.$(this);
         var ht = sym.$(this).height();
         
         setTimeout(function()
         {
         $(currentBub).css({ 'transition': '0.9s ease',
         'transform': 'scale(0)'
         });
         
             },200 + ( i * 55 ));
         
         });

      });
      //Edge binding end

      

      

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-351439758");
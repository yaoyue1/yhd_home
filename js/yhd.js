/*
 *Description : 1号店首页;
 *Author : Yao Yue;
 *Date : 2016/06/24;
 **/

var yhd={
    initFun:function(){
        this.loginFun();//头部登录注册hover时出现下方内容
        this.topmenuFun();//头部menu hover时出现下拉菜单
        this.wechatFun();//微信hover出现二维码
        this.cartFun();//购物车hover出现提示内容
        this.menuFun();//菜单hover出现详细类目
        this.searchFun();//搜索框效果
        this.slideFun();//banner轮播
        this.goodsslideFun();//多个商品轮播
        this.shanggouTab();//闪购选项卡
        this.brandFun();//流行百货品牌轮播


    },

//头部登录注册hover时出现下方内容
    loginFun:function(){
        var _login=$(".login_box");
        var _loginIcon=$(".login_box span");
        var _unloginBox=$(".unlogin-hover_box");
        _login.hover(function(){
            _unloginBox.show();
            _loginIcon.addClass("cur")
        },function(){
            _unloginBox.hide();
            _loginIcon.removeClass("cur")
        })
    },

//头部menu hover时出现下拉菜单
    topmenuFun:function(){
        var _outerUl=$(".outer_ul >li");
        _outerUl.hover(function(){
            var _that = $(this);
            _that.prev().addClass("border_none");
            _that.addClass("li_hover");
            _that.find(".menu_hover_cont").show();
        },function(){
            var _that = $(this);
            _that.prev().removeClass("border_none");
            _that.removeClass("li_hover");
            _that.find(".menu_hover_cont").hide();
        })
    },

//微信hover出现二维码
    wechatFun:function(){
        var _weixin=$(".weixin");
        var _weixinHover=$(".weixin_hover");
        _weixin.hover(function(){
            _weixinHover.show();
        },function(){
            _weixinHover.hide()
        })

    },

//购物车hover出现提示内容
    cartFun:function(){
        var _cart=$(".buy_car");
        var _cartCont=$(".goods_car_cont");
        _cart.hover(function(){
            _cartCont.show()
        },function(){
            _cartCont.hide()
        })
    },

//菜单hover出现详细类目
    menuFun:function(){
        var _sortLi=$(".sort_menu-cont li");
        _sortLi.hover(function(){
            $(this).addClass("cur").siblings().removeClass("cur");
            $(this).find(".hover_menu").show();
        },function(){
            $(this).find(".hover_menu").hide();
            $(this).removeClass("cur");
        })
    },

//搜索框效果
    searchFun:function(){
        var _commodity=$(".commodity");
        var _store =$(".store");
        //店铺hover效果
        _commodity.hover(function(){
            _store.show();
        },function(){
            _store.hide()
        });
        var _txt=$(".txt");
        var _history=$(".history");
        var _yhdSearch=$(".yhd_search");
        var _searchRank=$(".search_rank li");
        //历史记录框出现消失
        _txt.focus(function(){
            _history.show();
        });
//        _txt.blur(function(){
//            _history.hide();
//        });
        //正在热搜中hover效果
        _searchRank.hover(function(){
            $(this).addClass("current")
        },function(){
            $(this).removeClass("current")
        });
        //清除历史记录
        var _delete=$(".delete");
        var _historyNote=$(".history_note");
        _delete.click(function(){
            _historyNote.find("li").remove();
        })
    },

//banner轮播
    slideFun:function(){
        var _focus = $(".focus");
        var _focus_Li =$(".focus li");
        var _len = _focus_Li.length;
        var _circleSpan=$(".circle span");
        var _arrow=$(".arrow");
        var Index = 0;
        var picTimer;
        $(".prev").click(function() {
            Index -= 1;
            if(Index == -1) {Index = _len - 1;}
            showPics(Index);
        });
        $(".next").click(function() {
            Index += 1;
            if(Index == _len){Index = 0}
            showPics(Index);
        });
        function showPics(Index){
            _focus_Li.eq(Index).fadeIn(600).siblings().fadeOut(300);
            _circleSpan.eq(Index).addClass("cur").siblings().removeClass("cur")
        }
        //小圆圈hover效果
        _circleSpan.hover(function(){
            var i=$(this).index();
            showPics(i);
            Index=i;
        });
        //箭头hover效果
        $(".slide_box").hover(function(){
            _arrow.show()
        },function(){
            _arrow.hide()
        });
        _focus.hover(function(){//鼠标轮播上停止自动播放
            clearInterval(picTimer);
        },function(){
            picTimer = setInterval(function() {//开始自动播放
                Index++;
                if(Index == _len) {Index = 0;}
                showPics(Index);
            },3000);
        }).trigger("mouseleave");
    },

//多个商品轮播
    goodsslideFun:function(){
        var _goodsSlideWidth=$(".goods_slide").width();
        var _slideUl=$(".goods_slide ul");
        var _prev=$(".prev_btn");
        var _next=$(".next_btn");
        var _goodLi=$(".goods_slide ul li");
        var _liWidth=_goodLi.outerWidth(true);
        var i=Math.ceil(_goodsSlideWidth/_liWidth);
        var _len=_goodLi.length;
        var times=_len/i;
        var index=0;
        _next.click(function(){
            index++;
            if(index>times-2){
                index=times-1;
                _next.hide();
                _prev.show();
            }
            gomove(index);
        });
        _prev.click(function(){
            index--;
            if(index<1){
                index=0;
                _prev.hide();
                _next.show();
            }
            gomove(index);
        });
        function gomove(){
            _slideUl.stop().animate({"margin-left":-index*_goodsSlideWidth},1000)
        }
    },

//闪购选项卡、时间遮罩
    shanggouTab:function(){
        var _tabTit=$(".tab_tit ul li");
        var _tabItem=$(".tab_cont .tab_cont_item");
        _tabTit.mousemove(function(){
            var Index=$(this).index();
            _tabItem.eq(Index).show().siblings().hide();
            $(this).addClass("cur").siblings().removeClass("cur")
        });

       //时间遮罩
        var _tabItemA=_tabItem.find("a");
        _tabItemA.hover(function(){
            $(this).find(".mask").stop(true,false).animate({"bottom":0},100)
        },function(){
            $(this).find(".mask").stop(true,false).animate({"bottom":-30+"px"},100)
        })

    },

    brandFun:function(){
        var _brandPrev=$(".brand_prev");
        var _brandNext=$(".brand_next");
        var _picBoxUl=$(".pic_box ul");
        var _slideLi=$(".pic_box ul li");
        var _len=_slideLi.length;
        var _slideLiWidth = _slideLi.outerWidth(true);
        var index=0;
        var autoTimer;
        _slideLi.first().clone().appendTo(_picBoxUl);
        _slideLi.last().clone().prependTo(_picBoxUl);
        _picBoxUl.css("margin-left",-_slideLiWidth);
        function move(){
            _picBoxUl.stop(true,false).animate({"margin-left":-(index+1)*_slideLiWidth},300)
        }
        //右箭头点击效果
        _brandNext.click(function(){
            if(index>_len-1){
                index=0;
                _picBoxUl.css({'margin-left':-_slideLiWidth})
            }
            index++;
            move();
        });
        //左箭头点击效果
        _brandPrev.click(function(){
            if(index<0){
                index=_len-1;
                _picBoxUl.css({'margin-left':-_len*_slideLiWidth})
            }
            index--;
            move();
        });
       //自动轮播
        _picBoxUl.hover(function(){
            clearInterval(autoTimer);
        },function(){
            autoTimer=setInterval(function(){
                if(index>_len-1){
                    index=0;
                    _picBoxUl.css({'margin-left':-_slideLiWidth})
                }
                index++;
                move();
            },3000)
        }).trigger("mouseleave");
    }
};
yhd.initFun();
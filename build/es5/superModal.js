/*! superModal v0.1.3 ~ (c) 2016 Nikita Trifan ~ http://nikitatrifan.ru */
'use strict';
var _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === 'function' && obj.constructor === Symbol ? 'symbol' : typeof obj;
};
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var superModal = function () {
    function superModal(options) {
        _classCallCheck(this, superModal);
        this.options = {
            settings: { duration: 200 },
            style: {
                'overlay-color': '#2B2E38',
                'content-position': 'left',
                'accept-color': '#2ecc71',
                'decline-color': '#e74c3c',
                'close-color': '#121212'
            },
            buttons: {
                'accept': {
                    visible: true,
                    content: 'Accept',
                    fn: null
                },
                'decline': {
                    visible: true,
                    content: 'Decline',
                    fn: null
                }
            },
            content: {
                title: 'Hi, it\'s superModal!',
                text: 'superModal it is light-weight library that can make your life better than before!'
            },
            alert: {
                title: 'Attention!',
                text: 'It is superModal Alert!',
                button: 'Ok!',
                fn: null
            },
            confirm: {
                content: {
                    title: 'We need your approval.',
                    text: 'How are you think, is the superModal the best library that can make your web developing easier?'
                },
                buttons: {
                    decline: {
                        content: 'Cancel',
                        fn: null
                    },
                    accept: {
                        content: 'Confirm',
                        fn: null
                    }
                }
            },
            image: {
                src: '',
                fn: null
            },
            paste: {
                content: {
                    title: 'Attention!',
                    html: '<div> Paste your html here! </div>'
                },
                buttons: {
                    decline: {
                        content: 'Cancel',
                        fn: null
                    },
                    accept: {
                        content: 'Confirm',
                        fn: null
                    }
                }
            }
        };
        for (var prop in options) {
            if (window.CP.shouldStopExecution(3)) {
                break;
            }
            var opt = options[prop];
            if ((typeof opt === 'undefined' ? 'undefined' : _typeof(opt)) == 'object') {
                for (var i in opt) {
                    if (window.CP.shouldStopExecution(2)) {
                        break;
                    }
                    var op = opt[i];
                    if ((typeof op === 'undefined' ? 'undefined' : _typeof(op)) == 'object') {
                        for (var k in op) {
                            if (window.CP.shouldStopExecution(1)) {
                                break;
                            }
                            var o = op[k];
                            this.options[prop][i][k] = o;
                        }
                        window.CP.exitedLoop(1);
                    } else {
                        this.options[prop][i] = op;
                    }
                }
                window.CP.exitedLoop(2);
            } else {
                this.options[prop] = opt;
            }
        }
        window.CP.exitedLoop(3);
        this.isOpened = false;
        this.init();
    }
    superModal.prototype.sheet = function sheet() {
        var style = document.createElement('style'), styleParams = this.options.style, styles = '.superModal__hidden{display:none!important}.superModal{position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999;overflow:hidden}.superModal__overlay{position:absolute;z-index:100;top:-5000px;right:-5000px;bottom:-5000px;left:-5000px;display:block;background:{overlay-color};opacity:0;transition:opacity .2s ease}.superModal__wrapper{text-align:{content-position};position:absolute;left:50%;top:50%;z-index:200;width:50%;max-width:750px;min-width:200px;max-height:90%;padding-bottom:25px;transform:translate(-50%,-50%) scale(1.1);transition:transform .2s ease,opacity .2s ease;opacity:0;background-color:#fff}@media screen and (max-width:768px){.superModal__wrapper{width:80%}}.superModal__loaded .superModal__wrapper{transform:translate(-50%,-50%) scale(1);opacity:1}.superModal__loaded .superModal__overlay{opacity:.9}.superModal__scrolling .superModal__wrapper{height:90%}@media screen and (max-width:480px){.superModal__scrolling .superModal__wrapper{width:95%}}.superModal__scrolling .superModal__body{position:absolute;left:5%;top:20%;width:94.9%;height:70%;overflow-y:scroll;padding-top:0}.superModal__scrolling .superModal__text{padding-right:5%}.superModal__scrolling .superModal__title--add{padding-top:15px}.superModal__scrolling .superModal__header{height:20%;position:absolute;left:5%;width:90%;overflow:hidden;min-height:80px;background-color:#fff;z-index:10;-webkit-display:flex;-moz-display:flex;-ms-display:flex;-o-display:flex;display:flex;-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-o-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.superModal__scrolling .superModal__close{right:0}.superModal__scrolling .superModal__footer{position:absolute;left:5%;bottom:0;width:90%;height:10%;min-height:40px;background-color:#fff;-webkit-display:flex;-moz-display:flex;-ms-display:flex;-o-display:flex;display:flex;-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-o-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.superModal__image{display:block}.superModal--image__alert .superModal__wrapper{height:90%}.superModal--image__alert .superModal__text,.superModal--image__alert .superModal__title{display:none}.superModal--image__alert .superModal__header{z-index:100;background-color:transparent}.superModal--image__alert .superModal__footer{height:0;display:none}.superModal--image__alert .superModal__body{height:100%;left:0;top:0;width:100%;overflow:hidden}.superModal--image__alert .superModal__image img{position:absolute;width:100%;height:100%;object-fit:cover}.superModal__container{width:90%;margin:0 auto}.superModal__close{position:absolute;top:20px;right:5%;display:block;height:14px;width:14px;opacity:.5;-webkit-transition:opacity .2s ease;-moz-transition:opacity .2s ease;-ms-transition:opacity .2s ease;-o-transition:opacity .2s ease;transition:opacity .2s ease}.superModal__body img,.superModal__close svg{display:block;width:100%}.superModal__close:hover{opacity:1}.superModal__close svg{height:100%;fill:{close-color}}.superModal__body{padding-top:20px;color:#121212}.superModal__title{margin:0;width:95%;padding-top:20px;padding-bottom:5px;font-size:1.8rem;line-height:2.4rem;color:inherit}@media screen and (max-width:1440px){.superModal__title{font-size:1.6rem;line-height:2.2rem}}.superModal__text{font-size:1.2rem;line-height:1.8rem;margin:0;padding-top:5px;padding-bottom:20px;color:inherit}@media screen and (max-width:1440px){.superModal__text{font-size:1rem;line-height:1.6rem}}.superModal__btn{display:inline-block;padding:7px 10px;margin-right:5px;background-color:#121212;text-transform:uppercase;text-decoration:none;color:#fff;font-size:1rem;line-height:1.2rem;transition:opacity .2s ease}@media screen and (max-width:768px){.superModal__btn{font-size:.8rem;line-height:1.2rem}}.superModal__btn:hover{opacity:.6}.superModal__accept{background-color:{accept-color}}.superModal__decline{background-color:{decline-color}}@media screen and (max-width:480px) and (max-height:533px){.superModal__title{font-size:1.2rem;line-height:1.8rem}}';
        style.appendChild(document.createTextNode(''));
        document.head.appendChild(style);
        styleParams.duration = this.options.settings.duration + 'ms';
        for (var rule in styleParams) {
            if (window.CP.shouldStopExecution(4)) {
                break;
            }
            var value = styleParams[rule];
            styles = styles.replace(new RegExp('{' + rule + '}', 'gi'), value);
        }
        window.CP.exitedLoop(4);
        style.textContent = styles;
        return this;
    };
    superModal.prototype.html = function html() {
        var markup = '<div class="superModal__overlay"></div><div class="superModal__wrapper"> <div class="superModal__container"> <div class="superModal__header"> <h5 class="superModal__title superModal__title--add"></h5> <a href="javascript:;" class="superModal__close"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"> <g id="Close"> <path d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/> </g> </svg> </a> </div> <div class="superModal__body"><p class="superModal__text">{text}</p><a href="javascript:;" class="superModal__image"></a></div><div class="superModal__footer"> <a href="javascript:;" class="superModal__btn superModal__accept {accept__hidden}">{accept}</a> <a href="javascript:;" class="superModal__btn superModal__decline {decline__hidden}">{decline}</a> </div></div></div>', params = this.options, btns = params.buttons, content = params.content;
        if ((typeof params === 'undefined' ? 'undefined' : _typeof(params)) == 'object') {
            for (var btn in btns) {
                if (window.CP.shouldStopExecution(5)) {
                    break;
                }
                var obj = btns[btn], visibleSelector = btn + '__hidden', hiddenClass = undefined, btnContent = obj.content;
                if (obj.visible) {
                    hiddenClass = '';
                } else {
                    hiddenClass = 'superModal__hidden';
                }
                ;
                markup = markup.replace(new RegExp('{' + visibleSelector + '}', 'gi'), hiddenClass).replace(new RegExp('{' + btn + '}', 'gi'), btnContent);
            }
            for (var element in content) {
                if (window.CP.shouldStopExecution(6)) {
                    break;
                }
                var value = content[element];
                markup = markup.replace(new RegExp('{' + element + '}', 'gi'), value);
            }
            window.CP.exitedLoop(6);
            window.CP.exitedLoop(5);
        } else
            markup = false;
        if (markup) {
            var wrapper = document.createElement('div');
            wrapper.classList.add('superModal', 'superModal__hidden');
            wrapper.innerHTML = markup;
            document.body.appendChild(wrapper);
            this.markup = markup;
            return this;
        }
        console.log('Some error with {this.options}!');
        return markup;
    };
    superModal.prototype.cache = function cache(callback) {
        var selector = {
            main: 'superModal',
            body: 'superModal__body',
            modal: 'superModal__wrapper',
            close: 'superModal__close',
            title: 'superModal__title',
            text: 'superModal__text',
            image: 'superModal__image',
            accept: 'superModal__accept',
            decline: 'superModal__decline',
            overlay: 'superModal__overlay'
        };
        this.dom = {};
        for (var className in selector) {
            if (window.CP.shouldStopExecution(7)) {
                break;
            }
            this.dom[className] = document.querySelector('.' + selector[className]);
        }
        window.CP.exitedLoop(7);
        if (callback)
            callback.call(this);
        return this;
    };
    superModal.prototype._closeConstr = function _closeConstr(that, fn) {
        return function () {
            var answer = undefined;
            if (fn)
                answer = fn();
            if (!answer)
                that.hide.call(that);
        };
    };
    superModal.prototype._removeImages = function _removeImages(els) {
        var dom = this.dom;
        if (dom.image.remove) {
            var img = els || dom.image.querySelectorAll('img');
            if (!img.length)
                return this;
            for (var i = 0, l = img.length; i < l; i++) {
                if (window.CP.shouldStopExecution(8)) {
                    break;
                }
                img[i].remove();
            }
            window.CP.exitedLoop(8);
        } else {
            dom.image.removeChild('img');
        }
        return this;
    };
    superModal.prototype._setText = function _setText(title, content, accept, decline, woContent) {
        var dom = this.dom;
        dom.title.textContent = title || this.options.content.title;
        if (woContent)
            dom.text.textContent = content || this.options.content.text;
        dom.accept.textContent = accept || this.options.buttons['accept'].content;
        dom.decline.textContent = decline || this.options.buttons['decline'].content;
    };
    superModal.prototype._setMode = function _setMode(callback) {
        var that = this, main = that.dom.main;
        main.classList.remove('superModal__scrolling');
        setTimeout(function () {
            var c = parseInt(that.dom.modal.clientHeight, 10), w = parseInt(window.innerHeight, 10) * 0.9;
            if (c > w) {
                main.classList.add('superModal__scrolling');
            }
            callback.call(that);
        }, 300);
        return this;
    };
    superModal.prototype._parseObject = function _parseObject(obj) {
        return obj != null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' ? obj : false;
    };
    superModal.prototype._toModal = function _toModal() {
        var dom = this.dom, modalClass = undefined;
        dom.main.classList.remove('superModal--image', 'superModal--image__alert');
        this._modBody();
        this._removeImages();
        this.isImage = false;
        return this;
    };
    superModal.prototype._modBody = function _modBody() {
        var method = undefined, dom = this.dom;
        if (this.isHTML) {
            method = 'remove';
            this._removeImages(dom.body.querySelectorAll('.superModal__html'));
            this.isHTML = false;
        } else {
            method = 'add';
        }
        for (var i = 0, l = dom.body.children.length; i < l; i++) {
            if (window.CP.shouldStopExecution(9)) {
                break;
            }
            dom.body.children[i].classList[method]('superModal__hidden');
        }
        window.CP.exitedLoop(9);
    };
    superModal.prototype._toImg = function _toImg(href, param) {
        var dom = this.dom, img = document.createElement('img'), modalClass = undefined;
        if (param === 'alert')
            modalClass = 'superModal--image';
        else
            modalClass = 'superModal--image__alert';
        this._modBody();
        this._removeImages();
        dom.main.classList.add(modalClass);
        img.setAttribute('src', href);
        dom.image.appendChild(img);
        this.isImage = true;
        return this;
    };
    superModal.prototype.show = function show() {
        var mainClass = this.dom.main.classList, startAnimation = function startAnimation() {
                return mainClass.add('superModal__loaded');
            };
        this.isOpened = true;
        mainClass.remove('superModal__hidden');
        this._setMode(startAnimation);
        return this;
    };
    superModal.prototype.hide = function hide() {
        var that = this, dom = this.dom;
        dom.main.classList.remove('superModal__loaded');
        setTimeout(function () {
            dom.main.classList.add('superModal__hidden');
            that.isOpened = false;
        }, 200);
        return this;
    };
    superModal.prototype.bind = function bind(accept, decline) {
        var that = this, dom = that.dom, elements = [
                dom.close,
                dom.overlay,
                dom.accept,
                dom.decline
            ], i = 0, l = elements.length, cancel = that._closeConstr(that, decline), confirm = that._closeConstr(that, accept);
        for (; i < l; i++) {
            if (window.CP.shouldStopExecution(10)) {
                break;
            }
            var element = elements[i];
            if (element) {
                element['onclick'] = cancel;
            }
        }
        window.CP.exitedLoop(10);
        if (accept)
            dom.accept['onclick'] = confirm;
        if (decline)
            dom.decline['onclick'] = cancel;
    };
    superModal.prototype.alert = function alert(title, content, btn, fn) {
        var dom = this.dom, data = this.options.alert;
        if (this.isImage || this.isHTML)
            this._toModal();
        dom.decline.classList.add('superModal__hidden');
        dom.accept.classList.remove('superModal__hidden');
        this._setText(title || data.title, content || data.text, btn || data.button);
        this.bind(fn || data.fn);
        this.show();
        return this;
    };
    superModal.prototype.confirm = function confirm(title, content, accept, decline, _confirm, cancel) {
        var dom = this.dom, data = this.options.confirm, object = function () {
                if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) == 'object') {
                    return title;
                } else {
                    return false;
                }
            }();
        if (this.isImage || this.isHTML)
            this._toModal();
        dom.decline.classList.remove('superModal__hidden');
        dom.accept.classList.remove('superModal__hidden');
        this._setText(object ? object['content']['title'] : title || data.content.title, object ? object['content']['text'] : content || data.content.text, object ? object['buttons']['accept']['content'] : accept || data.buttons.accept.content, object ? object['buttons']['decline']['content'] : decline || data.buttons.decline.content);
        this.bind(object ? object['buttons']['accept']['fn'] : _confirm || data.buttons.accept.fn, object ? object['buttons']['decline']['fn'] : cancel || data.buttons.decline.fn);
        this.show();
        return this;
    };
    superModal.prototype.image = function image(url, fn) {
        var that = this, data = that.options.image;
        if (url) {
            that._toImg(url || data.src);
        }
        if (fn) {
            that.dom.image.onclick = that._closeConstr(that, fn || data.fn);
        }
        that.show();
        return this;
    };
    superModal.prototype.paste = function paste(html, title, accept, decline, acceptFn, declineFn) {
        if (!html)
            return false;
        var dom = this.dom, object = this._parseObject(html), opt = this.options.paste;
        this.isHTML = false;
        this._modBody();
        if (object) {
            title = object['content']['title'] || opt.content.title;
            html = object['content']['html'] || opt.content.html;
            accept = object['buttons']['accept']['content'] || opt.buttons.accept.content;
            decline = object['buttons']['decline']['content'] || opt.buttons.decline.content;
            declineFn = object['buttons']['decline']['fn'] || opt.buttons.decline.fn;
            acceptFn = object['buttons']['accept']['fn'] || opt.buttons.accept.fn;
        }
        var el = document.createElement('div');
        el.classList.add('superModal__html');
        el.innerHTML = html;
        dom.body.appendChild(el);
        this._setText(title, null, accept, decline, true);
        this.bind(acceptFn, declineFn);
        dom.accept.classList[accept ? 'remove' : 'add']('superModal__hidden');
        dom.decline.classList[decline ? 'remove' : 'add']('superModal__hidden');
        this.isHTML = true;
        this.show();
        return this;
    };
    superModal.prototype.init = function init() {
        this.sheet();
        this.html();
        this.cache(this.bind);
        return this;
    };
    return superModal;
}();
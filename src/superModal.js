/*! superModal v0.1.5 ~ (c) 2016 Nikita Trifan ~ http://nikitatrifan.ru */
class superModal {
  constructor(options) {

    // Default options
    this.options = {

      settings: {
        duration: 200,
        custom: false,
        modalClass: "superModal"
      },

      style: {
        "overlay-color": "#2B2E38",
        "content-position": "left",
        "accept-color": "#2ecc71",
        "decline-color": "#e74c3c",
        "close-color": "#121212"
      },

      buttons: {
        "accept": {
          visible: true,
          content: "Accept",
          fn: null
        },
        "decline": {
          visible: true,
          content: "Decline",
          fn: null
        }
      },

      content: {
        title: "Title!",
        text: "Message: "
      },

      alert: {
        title: "Attention!",
        text: "It is Alert!",
        button: "Ok!"
      },
      confirm: {
        content: {
          title: "We need your approval.",
          text: "How are you think, is the superModal the best library that can make your web developing easier?"
        },
        buttons: {
          decline: {
            content: "Cancel",
            fn: console.log.bind(this, "Cancel is pushed!")
          },
          accept: {
            content: "Confirm",
            fn: console.log.bind(this, "Confirm is pushed!")
          }
        }
      },
      image: {
        src: "",
        fn: null
      },
      paste: {
        content: {
          title: "Attention!",
          html: "<div> Your html here! </div>"
        },
        buttons: {
          decline: {
            content: "Cancel",
            fn: null
          },
          accept: {
            content: "Confirm",
            fn: null
          }
        }
      }

    };
    // Set custom options
    this._parseOptions(options);

    this.isOpened = false;

    this.init();
  }
  sheet() {

    if (this.options.settings.custom) return this;

    // Create the <style> tag
    let style = document.createElement("style"),
        styleParams = this.options.style,
        styles = ".{modalClass}__hidden{display:none!important}.{modalClass}{position:fixed;left:0;top:0;width:100%;height:100%;z-index:9999;overflow:hidden}.{modalClass}__overlay{position:absolute;z-index:100;top:-5000px;right:-5000px;bottom:-5000px;left:-5000px;display:block;background:{overlay-color};opacity:0;transition:opacity .2s ease}.{modalClass}__html{padding-bottom: 10px;}.{modalClass}__wrapper{text-align:{content-position};position:absolute;left:50%;top:50%;z-index:200;width:50%;max-width:750px;min-width:200px;max-height:90%;padding-bottom:25px;transform:translate(-50%,-50%) scale(1.1);transition:transform .2s ease,opacity .2s ease;opacity:0;background-color:#fff}@media screen and (max-width:768px){.{modalClass}__wrapper{width:80%}}.{modalClass}__loaded .{modalClass}__wrapper{transform:translate(-50%,-50%) scale(1);opacity:1}.{modalClass}__loaded .{modalClass}__overlay{opacity:.9}.{modalClass}__scrolling .{modalClass}__wrapper{height:90%}@media screen and (max-width:480px){.{modalClass}__scrolling .{modalClass}__wrapper{width:95%}}.{modalClass}__scrolling .{modalClass}__body{position:absolute;left:5%;top:20%;width:94.9%;height:70%;overflow-y:scroll;padding-top:0}.{modalClass}__scrolling .{modalClass}__text{padding-right:5%}.{modalClass}__scrolling .{modalClass}__title--add{padding-top:15px}.{modalClass}__scrolling .{modalClass}__header{height:20%;position:absolute;left:5%;width:90%;overflow:hidden;min-height:80px;background-color:#fff;z-index:10;-webkit-display:flex;-moz-display:flex;-ms-display:flex;-o-display:flex;display:flex;-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-o-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.{modalClass}__scrolling .{modalClass}__close{right:0}.{modalClass}__scrolling .{modalClass}__footer{position:absolute;left:5%;bottom:0;width:90%;height:10%;min-height:40px;background-color:#fff;-webkit-display:flex;-moz-display:flex;-ms-display:flex;-o-display:flex;display:flex;-webkit-justify-content:flex-start;-moz-justify-content:flex-start;-ms-justify-content:flex-start;-o-justify-content:flex-start;justify-content:flex-start;-webkit-align-items:center;-moz-align-items:center;-ms-align-items:center;-o-align-items:center;align-items:center}.{modalClass}__image{display:block}.{modalClass}--image__alert .{modalClass}__wrapper{height:90%}.{modalClass}--image__alert .{modalClass}__text,.{modalClass}--image__alert .{modalClass}__title{display:none}.{modalClass}--image__alert .{modalClass}__header{z-index:100;background-color:transparent}.{modalClass}--image__alert .{modalClass}__footer{height:0;display:none}.{modalClass}--image__alert .{modalClass}__body{height:100%;left:0;top:0;width:100%;overflow:hidden}.{modalClass}--image__alert .{modalClass}__image img{position:absolute;width:100%;height:100%;object-fit:cover}.{modalClass}__container{width:90%;margin:0 auto}.{modalClass}__close{position:absolute;top:20px;right:5%;display:block;height:14px;width:14px;opacity:.5;-webkit-transition:opacity .2s ease;-moz-transition:opacity .2s ease;-ms-transition:opacity .2s ease;-o-transition:opacity .2s ease;transition:opacity .2s ease}.{modalClass}__body img,.{modalClass}__close svg{display:block;width:100%}.{modalClass}__close:hover{opacity:1}.{modalClass}__close svg{height:100%;fill:{close-color}}.{modalClass}__body{padding-top:20px;color:#121212}.{modalClass}__title{margin:0;width:95%;padding-top:20px;padding-bottom:5px;font-size:1.8rem;line-height:2.4rem;color:inherit}@media screen and (max-width:1440px){.{modalClass}__title{font-size:1.6rem;line-height:2.2rem}}.{modalClass}__text{font-size:1.2rem;line-height:1.8rem;margin:0;padding-top:5px;padding-bottom:20px;color:inherit}@media screen and (max-width:1440px){.{modalClass}__text{font-size:1rem;line-height:1.6rem}}.{modalClass}__btn{display:inline-block;padding:7px 10px;margin-right:5px;background-color:#121212;text-transform:uppercase;text-decoration:none;color:#fff;font-size:1rem;line-height:1.2rem;transition:opacity .2s ease}@media screen and (max-width:768px){.{modalClass}__btn{font-size:.8rem;line-height:1.2rem}}.{modalClass}__btn:hover{opacity:.6}.{modalClass}__accept{background-color:{accept-color}}.{modalClass}__decline{background-color:{decline-color}}@media screen and (max-width:480px) and (max-height:533px){.{modalClass}__title{font-size:1.2rem;line-height:1.8rem}}";

    // WebKit hack
    style.appendChild(document.createTextNode(""));

    // Add the <style> element to the page
    document.head.appendChild(style);
    
    // Some different settings
    styleParams.duration = this.options.settings.duration + "ms";
    styleParams.modalClass = this.options.settings.modalClass;

    // Change styles
    for (let rule in styleParams) {

      let value = styleParams[rule];
      // Set visible and replace content
      styles = styles.replace(new RegExp(`{${rule}}`, 'gi'), value);
    }

    // Check on another same styles
    let allStyles = document.querySelector(styleParams.modalClass + "-styles");
    if(allStyles) {
      for(let i = 0, l = allStyles.length; i < l; i++) {
        if (allStyles[i].getAttribute("id") === styleParams.modalClass + "-styles") {
          throw new TypeError(styleParams.modalClass + " styles is already init'ed.");
        }
      }
    }

    style.setAttribute("id", styleParams.modalClass + "-styles");

    // Insert rules
    style.innerHTML = styles;

    return this;
  }
  html() {
    let markup = '<div class="{modalClass}__overlay"></div><div class="{modalClass}__wrapper"> <div class="{modalClass}__container"> <div class="{modalClass}__header"> <h5 class="{modalClass}__title {modalClass}__title--add"></h5> <a href="javascript:;" class="{modalClass}__close"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"> <g id="Close"> <path d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312 c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312 l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937 c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/> </g> </svg> </a> </div> <div class="{modalClass}__body"><p class="{modalClass}__text">{text}</p><a href="javascript:;" class="{modalClass}__image"></a></div><div class="{modalClass}__footer"> <a href="javascript:;" class="{modalClass}__btn {modalClass}__accept {accept__hidden}">{accept}</a> <a href="javascript:;" class="{modalClass}__btn {modalClass}__decline {decline__hidden}">{decline}</a> </div></div></div>',
        params = this.options,
        btns = params.buttons,
        content = params.content,
        modalClass = params.settings.modalClass;

    if(document.querySelector("." + modalClass)) throw new TypeError(modalClass + " markup is already init'ed.");

    if (typeof params === 'object') {

      // Setup btns
      for (let btn in btns) {

        let obj = btns[btn],
            visibleSelector = btn + "__hidden",
            hiddenClass,
            btnContent = obj.content;

        // Visible
        if (obj.visible) {
          hiddenClass = "";
        } else {
          hiddenClass = modalClass + "__hidden";
        }
        // Set visible and replace content
        markup = markup.replace(new RegExp(`{${visibleSelector}}`, 'gi'), hiddenClass).replace(new RegExp(`{${btn}}`, 'gi'), btnContent);

      }
      // Change modal classes
      content.modalClass = modalClass;

      // Setup content
      for (let element in content) {

        let value = content[element];

        // Set visible and replace content
        markup = markup.replace(new RegExp(`{${element}}`, 'gi'), value);

      }

    } else markup = false;

    if (markup) {
      let wrapper = document.createElement("div");
      wrapper.classList.add(modalClass, modalClass + "__hidden");

      wrapper.innerHTML = markup;

      document.body.appendChild(wrapper);
      this.markup = markup;

      return this;
    }

    throw new TypeError("Error {this.options} should be an object!");
  }
  cache(callback) {
    let selectors = {
      main: "",
      body: "body",

      modal: "wrapper",
      close: "close",

      title: "title",
      text: "text",
      image: "image",

      accept: "accept",
      decline: "decline",
      overlay: "overlay"
    };

    let modalClass = this.options.settings.modalClass;

    // Set modal class
    for (let prop in selectors) {
      let val = selectors[prop];
      selectors[prop] = modalClass + (val ? "__" : "") + val;
    }

    this.dom = {};

    for (let className in selectors) {

      this.dom[className] = document.querySelector("." + selectors[className]);
    }

    if (callback) callback.call(this);

    return this;
  }
  _parseOptions(obj) {
    let options = this.options;

    for (let prop in obj) {

      let propVal = obj[prop];

      if (typeof propVal === 'object') {

        for (let prop1 in propVal) {
          let prop1Val = propVal[prop1];

          if (typeof prop1Val === 'object') {

            for (let prop2 in prop1Val) {
              let prop2Val = prop1Val[prop2];

              if (typeof prop2Val === 'object') {

                for (let prop3 in prop2Val) {
                  let prop3Val = prop2Val[prop3];

                  options[prop][prop1][prop2][prop3] = prop3Val;
                }
              } else {
                options[prop][prop1][prop2] = prop2Val;
              }

            }

          } else {
            options[prop][prop1] = prop1Val;
          }

        }

      } else {
        options[prop] = propVal;
      }

    }

  }
  _closeConstr(that, fn) {
    return () => {
      let answer;
      if (fn) answer = fn();
      if (!answer) that.hide.call(that);
    }
  }
  _removeImages(els) {
    let dom = this.dom;
    if (dom.image.remove) {
      let img = els || dom.image.querySelectorAll("img");
      if (!img.length) return this;
      for (let i = 0, l = img.length; i < l; i++) {
        img[i].remove();
      }
    } else {
      dom.image.removeChild("img");
    }
    return this;
  }
  _setText(title, content, accept, decline, woContent) {
    let dom = this.dom, opt = this.options;
    // Setting content
    dom.title.textContent = title || opt.content.title;
    if (!woContent) dom.text.textContent = content || opt.content.text;
    // Set btn's
    dom.accept.textContent = accept   || opt.buttons["accept"].content;
    dom.decline.textContent = decline || opt.buttons["decline"].content;
  }
  _setMode(callback) {

    let that = this,
        main = that.dom.main,
        modalClass = that.options.settings.modalClass;
    // Clean scrolling mode
    main.classList.remove(modalClass + "__scrolling");

    setTimeout(() => {
      let c = parseInt(that.dom.modal.clientHeight, 10),
          w = parseInt(window.innerHeight, 10) * 0.9;

      // if content height more than 90% set scrolling mode
      if (c > w) {
        main.classList.add(modalClass + "__scrolling");
      }

      callback.call(that);
    }, 100);

    return this;
  }
  _parseObject(obj) {
    return (obj != null && typeof obj === "object" ? obj : false);
  }
  _toModal() {
    let dom = this.dom,
        modalClass = this.options.settings.modalClass;

    dom.main.classList.remove(modalClass + "--image", modalClass + "--image__alert");

    this._modBody(true);
    this._removeImages();

    this.isImage = false;

    return this;
  }
  _modBody(except) {
    let method, dom = this.dom, modalClass = this.options.settings.modalClass;

    if (this.isHTML) {
      method = "remove"; this.isHTML = false;
      this._removeImages(dom.body.querySelectorAll("." + modalClass +"__html"));

    } else method = "add";

    for (let i = 0, l = dom.body.children.length; i < l; i++) {
      dom.body.children[i].classList[method](modalClass + "__hidden");
    }
    if (except) {
      dom.text.classList.remove(modalClass + "__hidden");
    }
  }
  _toImg(href, param) {

    let dom = this.dom,
        img = document.createElement("img"),
        modalClass = this.options.settings.modalClass,
        modeClass;

    if (param === "alert") modeClass = modalClass + "--image";
    else modeClass = modalClass + "--image__alert";

    // Clean modal
    this._modBody();
    this._removeImages();
    // Set class
    dom.main.classList.add(modeClass);
    // Load image
    img.setAttribute("src", href);
    // Show image block
    dom.image.classList.remove(modalClass + "__hidden");
    dom.image.appendChild(img);

    this.isImage = true;

    return this;
  }
  show() {
    let mainClass = this.dom.main.classList,
        modalClass = this.options.settings.modalClass,
        startAnimation = () => mainClass.add(modalClass + "__loaded");
    this.isOpened = true;

    mainClass.remove(modalClass + "__hidden");
    // Check on size of content and show modal :)
    this._setMode(startAnimation);

    return this;
  }
  hide() {
    let that = this,
        dom = this.dom,
        modalClass = that.options.settings.modalClass;
    dom.main.classList.remove(modalClass + "__loaded");
    setTimeout(function() {
      dom.main.classList.add(modalClass + "__hidden");
      that.isOpened = false;
    }, that.options.settings.duration*1.2);

    return this;
  }
  bind(accept, decline) {
    let that = this,
        dom = that.dom,
        elements = [dom.close, dom.overlay, dom.accept, dom.decline],
        i = 0,
        l = elements.length,

        cancel = that._closeConstr(that, decline),
        confirm = that._closeConstr(that, accept);

    for (; i < l; i++) {
      let element = elements[i];
      if (element) {
        element["onclick"] = cancel;
      }
    }

    if (accept) dom.accept["onclick"] = confirm;
    if (decline) dom.decline["onclick"] = cancel;

    return this;
  }
  alert(title, content, btn, fn) {
    let dom = this.dom,
        data = this.options.alert,
        modalClass = this.options.settings.modalClass;

    // return to standard modal
    if (this.isImage || this.isHTML) this._toModal();

    // Setting btns
    dom.decline.classList.add(modalClass + "__hidden");
    dom.accept.classList.remove(modalClass + "__hidden");
    // Set the text
    this._setText(
        title || data.title,
        content || data.text,
        btn || data.button
    );
    // Rebind buttons
    this.bind(fn);
    // Show modal
    this.show();

    return this;

  }
  confirm(title, content, accept, decline, confirm, cancel) {
    let dom = this.dom,
        data = this.options.confirm,
        object = this._parseObject(title),
        modalClass = this.options.settings.modalClass;

    if (this.isImage || this.isHTML) this._toModal();

    // Setting btns
    dom.decline.classList.remove(modalClass + "__hidden");
    dom.accept.classList.remove(modalClass + "__hidden");
    // Set the text
    this._setText(
        object ? (object["content"]["title"] || data.content.title) : (title || data.content.title),
        object ? (object["content"]["text"] || data.content.text) : (content || data.content.text),
        object ? (object["buttons"]["accept"]["content"] || data.buttons.accept.content) : (accept || data.buttons.accept.content),
        object ? (object["buttons"]["decline"]["content"] || data.buttons.decline.content) : (decline || data.buttons.decline.content)
    );
    // Rebind buttons
    this.bind(
        object ? (object["buttons"]["accept"]["fn"] || data.buttons.accept.fn) : (confirm || data.buttons.accept.fn),
        object ? (object["buttons"]["decline"]["fn"] || data.buttons.decline.fn) : (cancel || data.buttons.decline.fn)
    );
    // Show modal
    this.show();

    return this;
  }
  image(url, fn) {

    let that = this,
        data = this.options.image;

    that._toImg(url || data.src);

    that.dom.image.onclick = that._closeConstr(that, (fn || data.fn));

    // Show modal
    that.show();

    return that;
  }
  paste(html, title, accept, decline, acceptFn, declineFn) {

    let dom = this.dom,
        object = this._parseObject(html),
        data = this.options.paste,
        modalClass = this.options.settings.modalClass;

    // Hide body inner
    if (this.isImage) this._toModal();

    this.isHTML = false;
    this._modBody();
    // "Parse" object
    if (object) {
      title     = object["content"]["title"];
      html      = object["content"]["html"];
      accept    = object["buttons"]["accept"]["content"];
      decline   = object["buttons"]["decline"]["content"];
      declineFn = object["buttons"]["decline"]["fn"];
      acceptFn  = object["buttons"]["accept"]["fn"];
    }
    // Create element and add class
    let el = document.createElement("div");
    el.classList.add(modalClass + "__html");
    // Paste content
    el.innerHTML = html || data.content.html;
    dom.body.appendChild(el);
    this._setText(
        title || data.content.title,
        null,
        accept || data.buttons.accept.content,
        decline || data.buttons.decline.content,
        true
    );
    this.bind(acceptFn || data.buttons.accept.fn, declineFn || data.buttons.decline.fn);
    // Setting btns
    dom.accept.classList[(accept || data.buttons.accept.content) ? "remove" : "add"](modalClass + "__hidden");
    dom.decline.classList[(decline || data.buttons.decline.content) ? "remove" : "add"](modalClass + "__hidden");

    this.isHTML = true;

    // Open modal
    this.show();

    return this;
  }
  init() {
    this.sheet().html().cache().bind();

    return this;
  }
}

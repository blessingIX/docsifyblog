/*
 * MIT License
 * 
 * Copyright (c) 2020 Koy
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
'use strict';

function getIcon (cornerOptions) {
  if (!cornerOptions.icon) {
    return 'Not found the icon settings'
  }

  const icon = cornerOptions.icon.toLowerCase();

  if (icon === 'github') {
    return '<svg viewBox="0 0 250 250" aria-hidden="true">' +
    '<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>' +
    '<path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>' +
    '<path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path>' +
    '</svg>'
  }

  if (icon === 'gitlab') {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.50943 453.67966"><path d="M0,-20 L1150,1150 L1300,1150 L500,14 L500,25 L2500,0 Z"></path><path d="M491.58891 259.39833l-27.55867-84.81467L409.41291 6.48633c-2.80934-8.648-15.04533-8.648-17.856 0l-54.61867 168.09733H155.57158l-54.62-168.09733c-2.80933-8.648-15.04533-8.648-17.856 0L28.47825 174.58366.92092 259.39833c-2.514669 7.736.24 16.21066 6.82 20.992l238.51333 173.28933 238.51466-173.28933c6.58-4.78134 9.33333-13.256 6.82-20.992" fill="#fc6d26" transform="translate(330 -20) rotate(45) scale(0.5)"></path></svg>'
  }

  if (icon === 'spring') {
    return '<svg  viewBox="0 0 66.146 66.146" aria-hidden="true">' +
    '<path d="M0 0l66.146 66.146.067-66.08z"></path><path fill="currentColor" d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z" transform=translate(30,5) />' +
     '</svg>'
  }

  if (icon === 'spring2') {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><path d="M0 0h32v32H0z"/><path fill="#70AD51" d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"/></g></svg>'
  }

  if (icon === 'golang') {
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><g fill-rule="evenodd" transform="translate(11,0) rotate(45) scale(0.5)"><path d="m14 15.01h1v-8.02c0-3.862-3.134-6.991-7-6.991-3.858 0-7 3.13-7 6.991v8.02h1v-8.02c0-3.306 2.691-5.991 6-5.991 3.314 0 6 2.682 6 5.991v8.02m-10.52-13.354c-.366-.402-.894-.655-1.48-.655-1.105 0-2 .895-2 2 0 .868.552 1.606 1.325 1.883.102-.321.226-.631.371-.93-.403-.129-.695-.507-.695-.953 0-.552.448-1 1-1 .306 0 .58.138.764.354.222-.25.461-.483.717-.699m9.04-.002c.366-.401.893-.653 1.479-.653 1.105 0 2 .895 2 2 0 .867-.552 1.606-1.324 1.883-.101-.321-.225-.632-.37-.931.403-.129.694-.507.694-.952 0-.552-.448-1-1-1-.305 0-.579.137-.762.353-.222-.25-.461-.483-.717-.699" fill="#fff"/><path d="m5.726 7.04h1.557v.124c0 .283-.033.534-.1.752-.065.202-.175.391-.33.566-.35.394-.795.591-1.335.591-.527 0-.979-.19-1.355-.571-.376-.382-.564-.841-.564-1.377 0-.547.191-1.01.574-1.391.382-.382.848-.574 1.396-.574.295 0 .57.06.825.181.244.12.484.316.72.586l-.405.388c-.309-.412-.686-.618-1.13-.618-.399 0-.733.138-1 .413-.27.27-.405.609-.405 1.015 0 .42.151.766.452 1.037.282.252.587.378.915.378.28 0 .531-.094.754-.283.223-.19.347-.418.373-.683h-.94v-.535m2.884.061c0-.53.194-.986.583-1.367.387-.381.853-.571 1.396-.571.537 0 .998.192 1.382.576.386.384.578.845.578 1.384 0 .542-.194 1-.581 1.379-.389.379-.858.569-1.408.569-.487 0-.923-.168-1.311-.505-.426-.373-.64-.861-.64-1.465m.574.007c0 .417.14.759.42 1.028.278.269.6.403.964.403.395 0 .729-.137 1-.41.272-.277.408-.613.408-1.01 0-.402-.134-.739-.403-1.01-.267-.273-.597-.41-.991-.41-.392 0-.723.137-.993.41-.27.27-.405.604-.405 1m-.184 3.918c.525.026.812.063.812.063.271.025.324-.096.116-.273 0 0-.775-.813-1.933-.813-1.159 0-1.923.813-1.923.813-.211.174-.153.3.12.273 0 0 .286-.037.81-.063v.477c0 .268.224.5.5.5.268 0 .5-.223.5-.498v-.252.25c0 .268.224.5.5.5.268 0 .5-.223.5-.498v-.478m-1-1.023c.552 0 1-.224 1-.5 0-.276-.448-.5-1-.5-.552 0-1 .224-1 .5 0 .276.448.5 1 .5" fill="#fff"/></g></svg>'
  }

  // if the icon is not in the preset, it should be the image url
  const width = cornerOptions.width ? cornerOptions.width : cornerOptions.height ? cornerOptions.height : 100;
  const heitht = cornerOptions.height ? cornerOptions.height : cornerOptions.width ? cornerOptions.width : 100;
  return `<img docsify-corner src=${cornerOptions.icon} width= ${width} height = ${heitht}>`
}

const cornerOptions = {

  // the widtH of the icon image
  width: '',
  // the height of the icon image
  height: '',
  // the repo url
  url: '',
  // the target, align to site by default
  target:'',
  // the icon name/url
  icon: '',
  // the text of the title attribute is displayed as a tooltip
  title: '',
  // the corner background color, default false to use default color
  background: false,
  // the icon color, default false to use default color
  color: false
};

function corner (hook, vm) {
  // check if config the repo
  if (!window.$docsify.repo) {
    return
  }

  hook.mounted(function () {
    const a = document.querySelector('a.github-corner');
    a.innerHTML = getIcon(cornerOptions);

    cornerOptions.url && (a.href = cornerOptions.url);
    cornerOptions.title && (a.title = cornerOptions.title);

    if(cornerOptions.target){
      a.target = cornerOptions.target;
    }

    // icon color config
    const cl = document.querySelector('.github-corner svg');

    if (cl && cornerOptions.background) {
      cl.style.setProperty('fill', cornerOptions.background);
    }

    if (cl && cornerOptions.color) {
      cl.style.setProperty('color', cornerOptions.color);
    }
  });
}

// find corner plugin options
window.$docsify.corner = Object.assign(
  cornerOptions,
  window.$docsify.corner
);
window.$docsify.plugins = [].concat(corner, window.$docsify.plugins);

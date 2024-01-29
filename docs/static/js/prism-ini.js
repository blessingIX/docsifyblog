/*
 * MIT LICENSE
 * 
 * Copyright (c) 2012 Lea Verou
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
Prism.languages.ini = {

	/**
	 * The component mimics the behavior of the Win32 API parser.
	 *
	 * @see {@link https://github.com/PrismJS/prism/issues/2775#issuecomment-787477723}
	 */

	'comment': {
		pattern: /(^[ \f\t\v]*)[#;][^\n\r]*/m,
		lookbehind: true
	},
	'section': {
		pattern: /(^[ \f\t\v]*)\[[^\n\r\]]*\]?/m,
		lookbehind: true,
		inside: {
			'section-name': {
				pattern: /(^\[[ \f\t\v]*)[^ \f\t\v\]]+(?:[ \f\t\v]+[^ \f\t\v\]]+)*/,
				lookbehind: true,
				alias: 'selector'
			},
			'punctuation': /\[|\]/
		}
	},
	'key': {
		pattern: /(^[ \f\t\v]*)[^ \f\n\r\t\v=]+(?:[ \f\t\v]+[^ \f\n\r\t\v=]+)*(?=[ \f\t\v]*=)/m,
		lookbehind: true,
		alias: 'attr-name'
	},
	'value': {
		pattern: /(=[ \f\t\v]*)[^ \f\n\r\t\v]+(?:[ \f\t\v]+[^ \f\n\r\t\v]+)*/,
		lookbehind: true,
		alias: 'attr-value',
		inside: {
			'inner-value': {
				pattern: /^("|').+(?=\1$)/,
				lookbehind: true
			}
		}
	},
	'punctuation': /=/
};

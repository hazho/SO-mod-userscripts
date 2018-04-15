// ==UserScript==
// @name         Show Flags On Deleted Posts
// @description  Hide normal flags and only show those that are on deleted posts
// @homepage     https://github.com/samliew/SO-mod-userscripts
// @author       @samliew
// @version      1.0
//
// @include      https://stackoverflow.com/admin/dashboard*
// @include      https://serverfault.com/admin/dashboard*
// @include      https://superuser.com/admin/dashboard*
// @include      https://askubuntu.com/admin/dashboard*
// @include      https://mathoverflow.net/admin/dashboard*
//
// @include      /^https?:\/\/.*\.stackexchange\.com\/admin\/dashboard.*/
//
// @exclude      https://*comment*
// ==/UserScript==

(function() {
    'use strict';

    function doPageload() {
        $('.answer-link:not(.deleted-answer)').parents('.flagged-post-row').remove();
    }

    // On page load
    doPageload();

})();

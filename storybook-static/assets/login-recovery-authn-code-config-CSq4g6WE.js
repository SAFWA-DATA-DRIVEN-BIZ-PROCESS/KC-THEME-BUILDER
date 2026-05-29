import{i as e,t}from"./iframe-oecarBCB.js";import{a as n,f as r,n as i,u as a}from"./i18n-CjAMWY9o.js";import{C as o,k as s,n as c,r as l,t as u,w as d}from"./Template-De9c5Udz.js";import{t as f}from"./checkbox-Dfn-G0TX.js";import{t as p}from"./label-DMZYQiZs.js";import{t as m}from"./LogoutOtherSessions-DUobcMHn.js";import{t as h}from"./waitForElementMountedOnDom-PPoQS_s8.js";var g=s(`Copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),_=s(`Download`,[[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`polyline`,{points:`7 10 12 15 17 10`,key:`2ggqvy`}],[`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`,key:`1vk2je`}]]),v=s(`Printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),y=e(t(),1);function b(e){let{olRecoveryCodesListId:t}=e,{msgStr:n,isFetchingTranslations:r}=i(),{insertScriptTags:a}=c({effectId:`LoginRecoveryAuthnCodeConfig`,scriptTags:[{type:`text/javascript`,textContent:()=>`

                    /* copy recovery codes  */
                    function copyRecoveryCodes() {
                        var tmpTextarea = document.createElement("textarea");
                        var codes = document.querySelectorAll("#${t} li");
                        for (i = 0; i < codes.length; i++) {
                            tmpTextarea.value = tmpTextarea.value + codes[i].innerText + "\\n";
                        }
                        document.body.appendChild(tmpTextarea);
                        tmpTextarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(tmpTextarea);
                    }

                    var copyButton = document.getElementById("copyRecoveryCodes");
                    copyButton && copyButton.addEventListener("click", function () {
                        copyRecoveryCodes();
                    });

                    /* download recovery codes  */
                    function formatCurrentDateTime() {
                        var dt = new Date();
                        var options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            timeZoneName: 'short'
                        };

                        return dt.toLocaleString('en-US', options);
                    }

                    function parseRecoveryCodeList() {
                        var recoveryCodes = document.querySelectorAll("#${t} li");
                        var recoveryCodeList = "";

                        for (var i = 0; i < recoveryCodes.length; i++) {
                            var recoveryCodeLiElement = recoveryCodes[i].innerText;
                            recoveryCodeList += recoveryCodeLiElement + "\\r\\n";
                        }

                        return recoveryCodeList;
                    }

                    function buildDownloadContent() {
                        var recoveryCodeList = parseRecoveryCodeList();
                        var dt = new Date();
                        var options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            timeZoneName: 'short'
                        };

                        return fileBodyContent =
                            ${JSON.stringify(n(`recovery-codes-download-file-header`))} + "\\n\\n" +
                            recoveryCodeList + "\\n" +
                            ${JSON.stringify(n(`recovery-codes-download-file-description`))} + "\\n\\n" +
                            ${JSON.stringify(n(`recovery-codes-download-file-date`))} + " " + formatCurrentDateTime();
                    }

                    function setUpDownloadLinkAndDownload(filename, text) {
                        var el = document.createElement('a');
                        el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                        el.setAttribute('download', filename);
                        el.style.display = 'none';
                        document.body.appendChild(el);
                        el.click();
                        document.body.removeChild(el);
                    }

                    function downloadRecoveryCodes() {
                        setUpDownloadLinkAndDownload('kc-download-recovery-codes.txt', buildDownloadContent());
                    }

                    var downloadButton = document.getElementById("downloadRecoveryCodes");
                    downloadButton && downloadButton.addEventListener("click", downloadRecoveryCodes);

                    /* print recovery codes */
                    function buildPrintContent() {
                        var recoveryCodeListHTML = document.getElementById('${t}').innerHTML;
                        var styles =
                            \`@page { size: auto;  margin-top: 0; }
                            body { width: 480px; }
                            div { list-style-type: none; font-family: monospace }
                            p:first-of-type { margin-top: 48px }\`;

                        return printFileContent =
                            "<html><style>" + styles + "</style><body>" +
                            "<title>kc-download-recovery-codes</title>" +
                            "<p>" + ${JSON.stringify(n(`recovery-codes-download-file-header`))} + "</p>" +
                            "<div>" + recoveryCodeListHTML + "</div>" +
                            "<p>" + ${JSON.stringify(n(`recovery-codes-download-file-description`))} + "</p>" +
                            "<p>" + ${JSON.stringify(n(`recovery-codes-download-file-date`))} + " " + formatCurrentDateTime() + "</p>" +
                            "</body></html>";
                    }

                    function printRecoveryCodes() {
                        var w = window.open();
                        w.document.write(buildPrintContent());
                        w.print();
                        w.close();
                    }

                    var printButton = document.getElementById("printRecoveryCodes");
                    printButton && printButton.addEventListener("click", printRecoveryCodes);
                `}]});(0,y.useEffect)(()=>{r||(async()=>{await h({elementId:t}),a()})()},[r])}var x=r();function S(){let{kcContext:e}=n();a(e.pageId===`login-recovery-authn-code-config.ftl`);let{recoveryAuthnCodesConfigBean:t,isAppInitiatedAction:r}=e,{msg:s,msgStr:c}=i(),h=`kc-recovery-codes-list`;return b({olRecoveryCodesListId:h}),(0,x.jsx)(u,{headerNode:s(`recovery-code-config-header`),children:(0,x.jsxs)(`div`,{className:`space-y-6`,children:[(0,x.jsx)(o,{variant:`warning`,children:(0,x.jsx)(d,{children:(0,x.jsxs)(`div`,{className:`space-y-2`,children:[(0,x.jsx)(`h4`,{className:`font-medium`,children:s(`recovery-code-config-warning-title`)}),(0,x.jsx)(`p`,{className:`text-sm`,children:s(`recovery-code-config-warning-message`)})]})})}),(0,x.jsx)(`div`,{className:`bg-muted/50 rounded-lg p-4`,children:(0,x.jsx)(`ol`,{id:h,className:`grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm`,children:t.generatedRecoveryAuthnCodesList.map((e,t)=>(0,x.jsxs)(`li`,{className:`flex items-center space-x-2`,children:[(0,x.jsxs)(`span`,{className:`text-muted-foreground min-w-8`,children:[t+1,`:`]}),(0,x.jsxs)(`span`,{className:`font-medium`,children:[e.slice(0,4),`-`,e.slice(4,8),`-`,e.slice(8)]})]},t))})}),(0,x.jsxs)(`div`,{className:`flex flex-wrap  gap-2`,children:[(0,x.jsxs)(l,{id:`printRecoveryCodes`,variant:`outline`,size:`sm`,type:`button`,className:`flex items-center gap-2`,children:[(0,x.jsx)(v,{className:`w-4 h-4`}),s(`recovery-codes-print`)]}),(0,x.jsxs)(l,{id:`downloadRecoveryCodes`,variant:`outline`,size:`sm`,type:`button`,className:`flex items-center gap-2`,children:[(0,x.jsx)(_,{className:`w-4 h-4`}),s(`recovery-codes-download`)]}),(0,x.jsxs)(l,{id:`copyRecoveryCodes`,variant:`outline`,size:`sm`,type:`button`,className:`flex items-center gap-2`,children:[(0,x.jsx)(g,{className:`w-4 h-4`}),s(`recovery-codes-copy`)]})]}),(0,x.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,x.jsx)(f,{id:`kcRecoveryCodesConfirmationCheck`,name:`kcRecoveryCodesConfirmationCheck`,onCheckedChange:e=>{let t=document.getElementById(`saveRecoveryAuthnCodesBtn`);t&&(t.disabled=!e)}}),(0,x.jsx)(p,{htmlFor:`kcRecoveryCodesConfirmationCheck`,className:`text-sm font-medium cursor-pointer`,children:s(`recovery-codes-confirmation-message`)})]}),(0,x.jsxs)(`form`,{action:e.url.loginAction,className:`space-y-4`,id:`kc-recovery-codes-settings-form`,method:`post`,children:[(0,x.jsx)(`input`,{type:`hidden`,name:`generatedRecoveryAuthnCodes`,value:t.generatedRecoveryAuthnCodesAsString}),(0,x.jsx)(`input`,{type:`hidden`,name:`generatedAt`,value:t.generatedAt}),(0,x.jsx)(`input`,{type:`hidden`,id:`userLabel`,name:`userLabel`,value:c(`recovery-codes-label-default`)}),(0,x.jsx)(m,{}),r?(0,x.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-3`,children:[(0,x.jsx)(l,{type:`submit`,id:`saveRecoveryAuthnCodesBtn`,disabled:!0,className:`sm:flex-1`,children:c(`recovery-codes-action-complete`)}),(0,x.jsx)(l,{type:`submit`,variant:`outline`,name:`cancel-aia`,value:`true`,id:`cancelRecoveryAuthnCodesBtn`,className:`sm:flex-1`,children:s(`recovery-codes-action-cancel`)})]}):(0,x.jsx)(l,{type:`submit`,className:`w-full`,id:`saveRecoveryAuthnCodesBtn`,disabled:!0,children:c(`recovery-codes-action-complete`)})]})]})})}S.__docgenInfo={description:``,methods:[],displayName:`Page`};var C=S;export{C as default};
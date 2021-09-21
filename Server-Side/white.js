function Mute() {
	try {
		JSON.parse(localStorage["pessoas"]);
	} catch {
		localStorage["pessoas"] = JSON.stringify([]);
	}

	var pessoas = JSON.parse(localStorage["pessoas"]);
		
	var runloop = setInterval(function() {
		try {
			ult = "";

			state = false;

			volume = 1;

			off = '<svg id="mute" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15' +
				'H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485' +
				' 2 12V19.1685L6.16204 15.0065Z" fill="currentColor"></path><path d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 1' +
				'5 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.' +
				'91686Z" fill="currentColor"></path><path d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z"></path></svg>';

			auto = '<p id = "mute">Auto</p>';

			on = '<svg id="mute" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M' +
				'12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C' +
				'8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.8' +
				'96 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.' +
				'48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>';

			if (document.getElementById("mute") == null) {
				if (document.getElementsByClassName("NzPR9b")[0] != undefined) {
					document.getElementsByClassName("NzPR9b")[0].insertAdjacentHTML("beforeEnd", '<div class="Lrir5c" jsname="zo5vNb">' +
					'<div class="qO3Z3c"></div><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid foXzLb M9Bg4d" js' +
					'controller="VXdfxd" jsaction="mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touche' +
					'nd:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; context' +
					'menu:mg9Pef" aria-label="Mutar" aria-disabled="false" tabindex="0" data-tooltip="Mutar" aria-expanded="false"' +
					' data-tab-id="10" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><div class="Fvio9d Mb' +
					'hUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span clas' +
					's="NPEfkd RveJvd snByac"><div class="ZaI3hb"><svg id="mute" aria-hidden="false" width="20" height="20" viewBo' +
					'x="0 0 24 24"></div></span></span></div></div>');
					document.getElementsByClassName("NzPR9b")[0].insertAdjacentHTML("beforeEnd", '<div class="Lrir5c" jsname="zo5vNb">' +
					'<div class="qO3Z3c"></div><div jsshadow="" role="button" class="uArJ5e UQuaGc kCyAyd QU4Gid foXzLb M9Bg4d" js' +
					'controller="VXdfxd" jsaction="mouseenter:tfO1Yc; mouseleave:JywGue;touchstart:p6p2H; touchmove:FwuNnf; touche' +
					'nd:yfqBxc(preventMouseEvents=true|preventDefault=true); touchcancel:JMtRjd;focus:AHmuwe; blur:O22p3e; context' +
					'menu:mg9Pef" aria-label="Volume 100" aria-disabled="false" tabindex="0" data-tooltip="Volume 100" aria-expanded="false"' +
					' data-tab-id="10" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"><div class="Fvio9d Mb' +
					'hUzd" jsname="ksKsZd"></div><div class="e19J0b CeoRYc"></div><span jsslot="" class="l4V7wb Fxmcue"><span clas' +
					's="NPEfkd RveJvd snByac"><div class="ZaI3hb"><input type="range" min="0" max="100" value="100" id="volume" aria' +
					'-hidden="false" width="20" height="20"></div></span></span></div></div>');
				}
			}
			document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid foXzLb IeuGXd")[0].onclick = plist;

			function plist(e) {
				var l = document.getElementsByClassName("GvcuGe")[0];
				if (l) {
					for (var i = 1; i < l.children.length; i++) {
						l.children[i].children[1].insertAdjacentHTML("beforeEnd", '<div jsshadow="" role="button" class="U2' +
								'6fgb JRtysb WzwrXb mcyM9d" jscontroller="iSvg6e" jsaction="mousedown:UX7yZ; mouseup:lbsD7e; m' +
								'ouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart' +
								':p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touch' +
								'cancel:JMtRjd;keydown:I481le" jsname="gHzwMc" aria-label="Mais ações" aria-disabled="false" t' +
								'abindex="0" data-tooltip="Mais ações" aria-haspopup="true" aria-expanded="false" data-dynamic' +
								'="true" data-menu-corner="top-end" data-anchor-corner="top-end" data-tooltip-position="bottom' +
								'" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"></div>');
						if (pessoas.includes(l.children[i].innerText)) {
							l.children[i].children[1].children[2].insertAdjacentHTML("beforeEnd", off.replace('id="mute "',""));
							l.children[i].children[1].children[2].state = true;
						} else {
							l.children[i].children[1].children[2].insertAdjacentHTML("beforeEnd", on.replace('id="mute "',""));
							l.children[i].children[1].children[2].state = false;
						}
						l.children[i].children[1].children[2].nome = l.children[i].innerText;
						l.children[i].children[1].children[2].onclick = function(e) {
							if (!this.state) {
								if (!pessoas.includes(this.nome)) {
									pessoas.push(this.nome);
								}
								this.innerHTML = off.replace('id="mute "',"");
								this.state = true;
							} else {
								if (pessoas.includes(this.nome)) {
									pessoas.splice(pessoas.indexOf(this.nome), 1)
								}
								this.innerHTML = on.replace('id="mute "',"");
								this.state = false;
							}
							localStorage["pessoas"] = JSON.stringify(pessoas);
						}
					}
				}
			}
			function desligar() {
				state = false;
			}

			function ligar() {
				document.getElementById("volume").oninput = function(event) {
					document.getElementById("volume").parentElement.parentElement.parentElement.parentElement.attributes["data-tooltip"].value = "Volume " + event.target.value;
					volume = event.target.value/100;
					setvolume(volume);
				}
				document.getElementById("volume").disabled = false;
				state = true;
				atualizar("mute", desmutar, auto, "Automático");
			}

			function desmutar() {
				desligar();
				document.getElementById("volume").oninput = function(event) {
					document.getElementById("volume").parentElement.parentElement.parentElement.parentElement.attributes["data-tooltip"].value = "Volume " + event.target.value;
					volume = event.target.value/100;
					setvolume(volume);
				}
				document.getElementById("volume").disabled = false;
				atualizar("mute", mutar, on, "Desmutado");
				setvolume(volume);
			}
			
			function mutar() {
				desligar();
				document.getElementById("volume").oninput = null;
				document.getElementById("volume").parentElement.parentElement.parentElement.parentElement.attributes["data-tooltip"].value = "Mutado";
				document.getElementById("volume").disabled = true;
				atualizar("mute", ligar, off, "Mutado");
				setvolume(0);
			}

			function atualizar(id, fun, html, nome) {
				window.onkeypress = function(e) {
					if (e.code == "KeyM" && e.ctrlKey) {
						fun();
					} 
				}
				document.getElementById(id).parentElement.parentElement.parentElement.parentElement.onclick = fun;
				document.getElementById(id).parentElement.innerHTML = html;
				document.getElementById(id).parentElement.parentElement.parentElement.parentElement.attributes["data-tooltip"].value = nome;
			}

			function setvolume(value) {
				var audio = document.getElementsByTagName("audio");
				for (let i = 0, length = audio.length; i < length; i += 1) {
					audio[i].volume = value;
				}
			}

			function date() {
				var dd = new Date();
				var h = (dd.getHours()<10 ? '0' : '') + dd.getHours();
				var m = (dd.getMinutes()<10 ? '0' : '') + dd.getMinutes();
				var s = (dd.getSeconds()<10 ? '0' : '') + dd.getSeconds();

				return "[ " + h + ":" + m + ":" + s + " ] ";
			}

			loop = setInterval(function() {
				if (state) {
					try {
						var chat = document.getElementsByClassName("GDhqjd");
						for (let i = 0, length = chat.length; i < length; i += 1) {
							for (nome in pessoas) {
								if (chat[i].attributes.getNamedItem("data-sender-name").value == pessoas[nome]) {
									chat[i].remove();
								}
							}
						}
						var not = document.getElementsByClassName("N1zGnc XkylE");
						for (let i = 0, length = not.length; i < length; i += 1) {
							for (nome in pessoas) {
								if (not[i].getElementsByClassName("UgDTGe")[i].innerText == pessoas[nome]) {
									not[i].remove();
								}
							}
						}

						var list = document.getElementsByClassName("epqixc YUGmGb");
						var amutar = 0;

						for (let i = 0, length = list.length; i < length; i += 1) {
							for (nome in pessoas) {
								if (list[i].innerText == pessoas[nome]) {
									if (!document.getElementsByClassName("JHK7jb Nep7Ue UUpGkb")[i].attributes.class.value.includes("FTMc0c")) {
										amutar = amutar + 1;
										break;
									}
								}
							}
						}

						if (amutar > 0) {
							setvolume(0);
						} else if (amutar == 0) {
							setvolume(volume);
						}
						if (ult != document.getElementsByClassName("wnPUne N0PJ8e")[0].textContent) {
							plist();
							ult = document.getElementsByClassName("wnPUne N0PJ8e")[0].textContent;
						}
					} catch(e) {console.log(date() + e)}
				}
			}, 1000);

			ligar();
			clearInterval(runloop);
		} catch {}
	}, 1000);
}
Mute();

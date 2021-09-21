function Mute() {
	var runloop = setInterval(function() {
		function plist(el) {
			try {
				setTimeout(function() {
					var l = document.getElementsByClassName("GvcuGe")[0];
					if (l) {
						for (var i = 1; i < l.children.length; i++) {
							if (!l.children[i].children[1].children[2]) {
								l.children[i].children[1].insertAdjacentHTML("beforeEnd", '<div jsshadow="" role="button" class="U2' +
										'6fgb JRtysb WzwrXb mcyM9d" jscontroller="iSvg6e" jsaction="mousedown:UX7yZ; mouseup:lbsD7e; m' +
										'ouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart' +
										':p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventMouseEvents=true|preventDefault=true); touch' +
										'cancel:JMtRjd;keydown:I481le" jsname="gHzwMc" aria-label="Mais ações" aria-disabled="false" t' +
										'abindex="0" data-tooltip="Mais ações" aria-haspopup="true" aria-expanded="false" data-dynamic' +
										'="true" data-menu-corner="top-end" data-anchor-corner="top-end" data-tooltip-position="bottom' +
										'" data-tooltip-vertical-offset="-12" data-tooltip-horizontal-offset="0"></div>');
								if (pessoas.includes(l.children[i].innerText)) {
									l.children[i].children[1].children[2].insertAdjacentHTML("beforeEnd", off1.replace('id="mute1"',""));
									l.children[i].children[1].children[2].state = true;
									l.children[i].children[1].children[2]
								} else {
									l.children[i].children[1].children[2].insertAdjacentHTML("beforeEnd", on1.replace('id="mute1"',""));
									l.children[i].children[1].children[2].state = false;
								}
								l.children[i].children[1].children[2].nome = l.children[i].innerText;
								l.children[i].children[1].children[2].onclick = function(e) {
									if (!this.state) {
										if (!pessoas.includes(this.nome)) {
											pessoas.push(this.nome);
										}
										this.innerHTML = off1.replace('id="mute"',"");
										this.state = true;
									} else {
										if (pessoas.includes(this.nome)) {
											pessoas.splice(pessoas.indexOf(this.nome), 1)
										}
										this.innerHTML = on1.replace('id="mute"',"");
										this.state = false;
									}
									localStorage["pessoas"] = JSON.stringify(pessoas);
									plist(true);
								}
							} else if (el) {
								if (pessoas.includes(l.children[i].children[1].children[2].nome)) {
									l.children[i].children[1].children[2].innerHTML = off1.replace('id="mute"',"");
									l.children[i].children[1].children[2].state = true;
								} else {
									l.children[i].children[1].children[2].innerHTML = on1.replace('id="mute"',"");
									l.children[i].children[1].children[2].state = false;
								}
							}
						}
					}
				}, 200);
			} catch (e) {console.log(e)}
		}
		function desligar() {
			state = false;
		}

		function onvolume(event) {
			volume = event.target.value/100;
			setvolume(volume);
			var vs = document.querySelectorAll("#volume");
			for (var i = 0; i < vs.length; i++) {
				vs[i].value = event.target.value.toString();
			}
		}

		function ligar() {
			try {
				atualizarVolume(onvolume, false);
				state = true;
				atualizarDiv1(desmutar, auto1, "Automático");
				atualizarDiv2(desmutar, auto2, "Automático");
			} catch (e) {};
		}

		function desmutar() {
			desligar();
			atualizarVolume(onvolume, false);
			atualizarDiv1(mutar, on1, "Desmutado");
			atualizarDiv2(mutar, on2, "Desmutado");
			setvolume(volume);
		}
		
		function mutar() {
			desligar();
			atualizarVolume(null, true)
			atualizarDiv1(ligar, off1, "Mutado");
			atualizarDiv2(ligar, off2, "Mutado");
			setvolume(0);
		}

		function atualizarVolume(oninput, disabled) {
			cvold = disabled;
			cvol = oninput;
			var l = document.querySelectorAll("#volume");
			for (var i = 0; i < l.length; i++) {
				l[i].oninput = oninput;
				l[i].disabled = disabled;
			}
		}

		function atualizarDiv1(fun, html, nome) {
			window.onkeypress = function(e) {
				if (e.code == "KeyM" && e.ctrlKey) {
					fun();
				} 
			}
			cfun = fun;
			chtml1 = html;
			ctext = nome;
			if (document.getElementById("mute1") != null) {
				document.getElementById("mute1").parentElement.innerHTML = html;
				document.getElementById("mute1").parentElement.parentElement.onclick = fun;
				document.getElementById("mute1").parentElement.parentElement.getElementsByClassName("VfPpkd-StrnGf-rymPhb-b9t22c O6qLGb")[0].textContent = nome;
			}
		}
		function atualizarDiv2(fun, html, nome) {
			window.onkeypress = function(e) {
				if (e.code == "KeyM" && e.ctrlKey) {
					fun();
				} 
			}
			cfun = fun;
			chtml2 = html;
			ctext = nome;
			if (document.getElementById("mute2") != null) {
				document.getElementById("mute2").parentElement.innerHTML = html;
				document.getElementById("mute2").onclick = fun;
			}
		}

		function setvolume(value) {
			var audio = document.getElementsByTagName("audio");
			for (let i = 0, length = audio.length; i < length; i += 1) {
				if (audio[i].volume != value) {
					audio[i].volume = value;
				}
			}
		}

		function date() {
			var dd = new Date();
			var h = (dd.getHours()<10 ? '0' : '') + dd.getHours();
			var m = (dd.getMinutes()<10 ? '0' : '') + dd.getMinutes();
			var s = (dd.getSeconds()<10 ? '0' : '') + dd.getSeconds();

			return "[ " + h + ":" + m + ":" + s + " ] ";
		}

		try {
			JSON.parse(localStorage["pessoas"]);
		} catch {
			localStorage["pessoas"] = JSON.stringify([]);
		}

		var pessoas = JSON.parse(localStorage["pessoas"]);

		try {
			ult = "";

			state = false;

			volume = 1;

			off1 = '<svg style id="mute1" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><path d="M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15' +
				'H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485' +
				' 2 12V19.1685L6.16204 15.0065Z" fill="currentColor"></path><path d="M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 1' +
				'5 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.' +
				'91686Z" fill="currentColor"></path><path d="M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z" fill="currentColor"></path></svg>';
			off2 = off1.replace("mute1", "mute2").replace("currentColor", "#ffffff").replace('style', 'style="font-size: 26px; padding-left: 12px; padding-right: 12px;"');

			auto1 = '<p style id="mute1">A</p>';
			auto2 = auto1.replace("mute1", "mute2").replace("currentColor", "#ffffff").replace('style', 'style="font-size: 26px; padding-left: 12px; padding-right: 12px; margin-block-end: 24px; margin-block-start: 24px;"');

			on1 = '<svg style id="mute1" aria-hidden="false" width="20" height="20" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M' +
				'12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C' +
				'8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.8' +
				'96 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.' +
				'48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>';
			on2 = on1.replace("mute1", "mute2").replace("currentColor", "#ffffff").replace('style', 'style="font-size: 26px; padding-left: 12px; padding-right: 12px;"');

			ctext = "Automático";

			cfun = desmutar;

			chtml1 = auto1;
			chtml2 = auto2;

			cvold = false;
			cvol = onvolume;

			var b = document.getElementsByClassName("TqwH9c")[0].getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c")[0];
			if (b.onclick == null) {
				b.onclick = function() {
					if (document.getElementById("mute1") == null) {
						setTimeout(function() {
							try {
								if (b.parentElement["ariaExpanded"] == "true") {
									document.getElementsByClassName("VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c")[0]
									.getElementsByClassName("VfPpkd-StrnGf-rymPhb DMZ54e")[0].insertAdjacentHTML("beforeEnd", '<li class="V4jiNc nU2J7 VfPpkd-StrnGf-rymPhb-ibnC6b' +
										' VfPpkd-rymPhb-ibnC6b-OWXEXe-tPcied-hXIJHe" role="menuitem" aria-label="' + ctext + '"><span class="VfPpkd-StrnGf-rymPhb-pZXsl"></span><sp' +
										'an class="VfPpkd-StrnGf-rymPhb-f7MjDc">' + chtml1 + '</span><span class=" VfPpkd-StrnGf-rymPhb-b9t22c O6qLGb">' + ctext + '</span></li>'
									);
									document.getElementsByClassName("VfPpkd-xl07Ob-XxIAqe VfPpkd-xl07Ob q6oraf P77izf txTes OcVpRe VfPpkd-xl07Ob-XxIAqe-OWXEXe-FNFY6c")[0]
									.getElementsByClassName("VfPpkd-StrnGf-rymPhb DMZ54e")[0].insertAdjacentHTML("beforeEnd", '<li class="V4jiNc nU2J7 VfPpkd-StrnGf-rymPhb-ibnC6b' +
										' VfPpkd-rymPhb-ibnC6b-OWXEXe-tPcied-hXIJHe" role="menuitem"><input style="width: 100%;" type="range" min="0" max="100" value="' + volume * 100 + '" id="vo' +
										'lume" aria-hidden="false" width="20" height="20"></li>'
									);
									atualizarVolume(cvol, cvold);
									atualizarDiv1(cfun, chtml1, ctext);
									atualizarDiv2(cfun, chtml2, ctext);
								}
							} catch(e) {}
						}, 200);
					}
				}
			}
			if (document.getElementById("mute2") == null) {
				document.getElementsByClassName("SGP0hd kunNie")[0].insertAdjacentHTML("beforeEnd", '<div class="r6xAKc"><span data-is-tooltip-wrapper="true">' + 
					chtml2 + '</span></div>'
				);
				document.getElementsByClassName("SGP0hd kunNie")[0].insertAdjacentHTML("beforeEnd", '<input style="width: 100%; margin-left: 12px;" type="rang' +
					'e" min="0" max="100" value="' + volume * 100 + '" id="volume" aria-hidden="false" width="20" height="20">');
				atualizarVolume(cvol, cvold);
				atualizarDiv1(cfun, chtml1, ctext);
				atualizarDiv2(cfun, chtml2, ctext);
			}
			loop = setInterval(function() {
				if (document.getElementsByClassName("gFyGKf BN1Lfc")[0].parentElement.onclick == null) {
					document.getElementsByClassName("gFyGKf BN1Lfc")[0].parentElement.onclick = plist;
				}
				plist();

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
							if (list[i].innerText) {
								for (nome in pessoas) {
									if (list[i].innerText == pessoas[nome]) {
										if (list[i].parentElement.parentElement.parentElement.getElementsByClassName("atLQQ kssMZb").length > 0) {
											amutar = amutar + 1;
											break;
										}
									}
								}
							}
						}

						if (amutar > 0) {
							setvolume(0);
						} else if (amutar == 0) {
							setvolume(volume);
						}
						if (ult != document.getElementsByClassName("uGOf1d")[0].textContent) {
							plist();
							ult = document.getElementsByClassName("uGOf1d")[0].textContent;
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

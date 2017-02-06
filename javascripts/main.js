var main = {
	element: document.querySelector('.current'),
	nextElement: document.querySelector('.next'),
	counterElement: document.querySelector('.counter'),
	time: {
		zones: {
			"-12:00": {
				"United States Minor Outlying Islands": [
					"Baker Island",
					"Howland Island"
				]
			},
			"-11:00": {
				"United States": [
					"American Samoa"
				],
				"New Zealand": [
					"Niue"
				]
			},
			"-10:00": {
				"France": [
					"French Polynesia"
				],
				"New Zealand": [
					"Cook Islands"
				],
				"United States": [
					"Alaska",
					"Aleutian Islands west",
					"Hawaii"
				]
			},
			"-09:30": {
				"France": [
					"French Polynesia"
				]
			},
			"-09:00": {
				"France": [
					"French Polynesia"
				],
				"United States": [
					"Alaska"
				]
			},
			"-08:00": {
				"Canada": [
					"Vancouver"
				],
				"France": [
					"Clipperton Island"
				],
				"Mexico": [
					"Baja California"
				],
				"United Kingdom": [
					"Pitcairn Islands"
				],
				"United States": [
					"California",
					"Vancouver",
					"Nevada",
					"Oregon",
					"Washington",
					"Idaho"
				]
			},
			"-07:00": {
				"Canada": [
					"Alberta",
					"British Columbia",
					"Northwest Territories",
					"Nunavut",
					"Saskatchewan",
					"Lloydminster"
				],
				"Mexico": [
					"Baja California Sur",
					"Chihuahua",
					"Nayarit",
					"Sinaloa",
					"Sonora states"
				],
				"United States": [
					"Arizona",
					"Colorado",
					"Idaho",
					"Kansas",
					"Montana",
					"Nebraska",
					"Nevada",
					"New Mexico",
					"North Dakota",
					"Oregon",
					"South Dakota",
					"Texas",
					"Utah",
					"Wyoming"
				]
			},
			"-06:00": {
				"Canada": [
					"Manitoba",
					"Nunavut",
					"Ontario",
					"Saskatchewan"
				],
				"Chile": [
					"Easter Island"
				],
				"United States": [
					"Alabama",
					"Arkansas",
					"Florida",
					"Illinois",
					"Indiana",
					"Iowa",
					"Kansas",
					"Kentucky",
					"Louisiana",
					"Michigan",
					"Minnesota",
					"Mississippi",
					"Missouri",
					"Nebraska",
					"North Dakota",
					"Oklahoma",
					"South Dakota",
					"Tennessee",
					"Texas",
					"Wisconsin"
				]
			},
			"-05:00": {
				"Brazil": [
					"Acre",
					"Amazonas"
				],
				"Canada": [
					"Nunavut",
					"Ontario",
					"Quebec"
				],
				"Mexico": [
					"Quintana Roo"
				],
				"United Kingdom": [
					"Cayman Islands"
				],
				"United States": [
					"Delaware",
					"District of Columbia",
					"Florida",
					"Georgia",
					"Indiana",
					"Kentucky",
					"Maryland",
					"Michigan",
					"New England",
					"New Jersey",
					"New York",
					"North Carolina",
					"Ohio",
					"Pennsylvania",
					"South Carolina",
					"Tennessee",
					"Virginia",
					"Navassa Island"
				]
			},
			"-04:00": {
				"Brazil": [
					"Amazonas",
					"Canada",
					"New Brunswick",
					"Newfoundland and Labrador",
					"Nova Scotia",
					"Prince Edward Island",
					"Quebec"
				],
				"Chile": [
					"Mainland Chile"
				],
				"Denmark": [
					"Greenland"
				],
				"France": [
					"Guadeloupe",
					"Martinique",
					"Saint Barthélemy",
					"Saint-Martin"
				],
				"Netherlands": [
					"Aruba",
					"Caribbean Netherlands",
					"Curaçao",
					"Sint Maarten"
				],
				"United Kingdom": [
					"Anguilla",
					"Bermuda",
					"British Virgin Islands",
					"Montserrat",
					"Turks and Caicos Islands"
				],
				"United States": [
					"Puerto Rico",
					"U.S. Virgin Islands"
				]
			},
			"-03:30": {
				"Canada": [
					"Newfoundland and Labrador"
				]
			},
			"-03:00": {
				"Argentina": [
					"Buenos Aires"
				],
				"Chile": [
					"Magallanes Region"
				],
				"Denmark": [
					"Greenland"
				],
				"France": [
					"French Guiana",
					"Saint-Pierre and Miquelon"
				],
				"United Kingdom": [
					"Falkland Islands"
				]
			},
			"-02:00": {
				"Brazil": [
					"Fernando de Noronha"
				],
				"United Kingdom": [
					"South Georgia and the South Sandwich Islands"
				]
			},
			"-01:00": {
				"Denmark": [
					"Greenland"
				],
				"Portugal": [
					"Azores islands"
				]
			},
			"+00:00": {
				"Denmark": [
					"Faroe Islands",
					"Greenland"
				],
				"Republic of Ireland": [
					"Dublin"
				],
				"Spain": [
					"Canary Islands"
				],
				"United Kingdom": [
					"London"
				]
			},
			"+01:00": {
				"Austria": [
					"Vienna"
				],
				"France": [
					"Paris",
					"Bordeaux",
					"Toulouse",
					"Marseille",
					"Lyon",
					"Brest",
					"Montpellier",
					"Strasbourg",
					"Lille",
					"Nantes",
					"La Brède"
				],
				"Germany": [
					"Berlin"
				],
				"Italy": [
					"Rome"
				],
				"Spain": [
					"Madrid",
					"Barcelona"
				],
				"Tunisia": [
					"Tunis"
				],
				"United Kingdom": [
					"London"
				]
			},
			"+02:00": {
				"Egypt": [
					"Cairo"
				],
				"Greece": [
					"Athens"
				],
				"Israel": [
					"Jerusalem"
				],
				"Romania": [
					"Bucharest"
				],
				"United Kingdom": [
					"Akrotiri and Dhekelia"
				]
			},
			"+03:00": {
				"France": [
					"French Southern and Antarctic Lands",
					"Mayotte"
				],
				"Iraq": [
					"Baghdad"
				],
				"Qatar": [
					"Doha"
				],
				"Russia": [
					"Moscow"
				]
			},
			"+03:30": {
				"Iran": [
					"Tehran"
				]
			},
			"+04:00": {
				"France": [
					"French Southern and Antarctic Lands",
					"Réunion"
				],
				"Russia": [
					"Volga Federal District"
				]
			},
			"+04:30": {
				"Afghanistan": [
					"Kabul"
				]
			},
			"+05:00": {
				"Australia": [
					"Heard Island and McDonald Islands"
				],
				"France": [
					"French Southern and Antarctic Lands"
				],
				"Russia": [
					"Ural Federal District",
					"Volga Federal District"
				]
			},
			"+05:30": {
				"India": [
					"Delhi"
				],
				"Sri Lanka": [
					"Colombo"
				]
			},
			"+05:45": {
				"Nepal": [
					"Kathmandu"
				]
			},
			"+06:00": {
				"Russia": [
					"Siberian Federal District"
				],
				"United Kingdom": [
					"British Indian Ocean Territory"
				]
			},
			"+06:30": {
				"Australia": [
					"Cocos (Keeling) Islands"
				]
			},
			"+07:00": {
				"Australia": [
					"Christmas Island"
				],
				"Indonesia": [
					"Jakarta"
				],
				"Mongolia": [
					"Western part"
				],
				"Russia": [
					"Siberian Federal District"
				],
				"Thailand": [
					"Bangkok"
				]
			},
			"+08:00": {
				"Australia": [
					"Sydney"
				],
				"China": [
					"Beijing",
					"Hong Kong"
				],
				"Indonesia": [
					"Bangkok"
				],
				"Mongolia": [
					"Eastern part"
				],
				"Russia": [
					"Siberian Federal District"
				],
				"Singapore": [
					"Singapore"
				]
			},
			"+08:30": {
				"North Korea": [
					"Pyongyang"
				]
			},
			"+08:45": {
				"Australia": [
					"Western Australia"
				]
			},
			"+09:00": {
				"Indonesia": [
					"Maluku Islands, Papua and West Papua"
				],
			 	"Japan": [
					"Tokyo"
				],
				"South Korea": [
					"Seoul"
				],
				"Russia": [
					"Far Eastern Federal District"
				]
			},
			"+09:30": {
				"Australia": [
					"Northern Territory",
					"South Australia",
					"New South Wales"
				]
			},
			"+10:00": {
				"Australia": [
					"Sydney"
				],
				"Russia": [
					"Far Eastern Federal District"
				],
				"United States": [
					"Guam",
					"Northern Mariana Islands"
				]
			},
			"+10:30": {
				"Australia": [
					"New South Wales"
				]
			},
			"+11:00": {
				"Australia": [
					"Norfolk Island"
				],
				"France": [
					"New Caledonia"
				],
				"Papua New Guinea": [
					"Autonomous Region of Bougainville",
				],
				"Russia": [
					"Far Eastern Federal District"
				]
			},
			"+12:00": {
				"France": [
					"Wallis and Futuna",
				],
				"Russia": [
					"Far Eastern Federal District",
				],
				"United States": [
					"Wake Island"
				]
			}
		},
		utc: function(offset) {
			var date = new Date();
			var utc = date.getTime() - date.getTimezoneOffset()*60000;
			offset = offset.split(':');
			hour = parseInt(offset[0]);
			minute = (hour == 0 ? 1 : hour/Math.abs(hour))*parseInt(offset[1]);

			return new Date(utc + 60000*((hour-2)*60+minute));
		},
		is420: function(date) {
			return date.getHours() == 4 && date.getMinutes() == 20;
		},
		get offset() {
			for(var offset in this.zones) {
				if(this.is420(this.utc(offset))) {
					return offset;
				}
			}

			return null;
		},
		get next() {
			var next = {
				offset: null,
				hours: 0,
				minutes: 0
			};
			var time, hours, minutes;
			for(var offset in this.zones) {
				time = this.utc(offset);
				hours = time.getHours();
				minutes = time.getMinutes();

				if(hours <= 4 || (hours <= 4 && minutes < 20)) {
					if(next.hours < hours  || (next.hours <= hours && next.minutes < minutes)) {
						next = {
							offset: offset,
							hours: hours,
							minutes: minutes
						};
					}
				}
			}

			return next.offset;
		},
		delta: function(offset) {
			var time = this.utc(offset);
			var delta = {
				hours: Math.abs(4-time.getHours()),
				minutes: Math.abs(20-time.getMinutes()),
				seconds: Math.abs(60-time.getSeconds())
			};

			if(delta.seconds < 10) delta.seconds = '0'+delta.seconds;
			if(delta.minutes < 10) delta.minutes = '0'+delta.minutes;
			if(delta.hours < 10) delta.hours = '0'+delta.hours;

			return delta.hours+'h '+delta.minutes+'min '+delta.seconds+'s';
		},
		place: function(offset) {
			var zone = this.zones[offset];
			var countries = Object.keys(zone);
			var country = countries[Math.floor(Math.random()*countries.length)];
			var cities = zone[country];
			var city = cities[Math.floor(Math.random()*cities.length)];

			return city+', '+country;
		}
	},
	current: null,
	audio: {
		element: document.querySelector('audio'),
		interval: null,
		get volume() {
			return this.element.volume;
		},
		set volume(v) {
			this.element.volume = v > 1 ? 1 : (v < 0 ? 0 : v);
		},
		set currentTime(v) {
			this.element.currentTime = v;
		},
		get paused() {
			return this.element.paused;
		},
		get played() {
			return !this.paused;
		},
		play: function() {
			clearInterval(this.interval);
			this.volume = 1;
			this.currentTime = 0;
			if(this.paused) this.element.play();
		},
		pause: function() {
			if(this.played) {
				var self = this;
				this.interval = setInterval(function() {
					self.volume -= 0.01;
					if(self.volume <= 0) {
						clearInterval(self.interval);
						self.element.pause();
					}
				}, 100);
			}
		}
	},
	update: function(first) {
		var offset = this.time.offset;
		if(offset != this.current || first) {
			this.current = offset;
			if(offset) {
				this.element.innerHTML = this.time.place(offset);
				this.is420 = true;
			}
			else {
				this.element.innerHTML = "No Place :(";
				this.nextElement.innerHTML = 'Next place may be: '+this.time.place(this.time.next);
				this.updateNext();
				this.is420 = false;
			}
		}
		else if(this.current === null) this.updateNext();
	},
	updateNext: function() {
		this.counterElement.innerHTML = '(in '+this.time.delta(this.time.next)+')';
	},
	set is420(v) {
		if(v) {
			document.body.setAttribute('data-420', 'true');
			this.audio.play();
		}
		else {
			document.body.removeAttribute('data-420');
			this.audio.pause();
		}
	},
	init: function() {
		var self = this;
		this.update(true);
		setInterval(function() {
			self.update();
		}, 1000);
	}
};

main.init();

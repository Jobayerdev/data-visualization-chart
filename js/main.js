const getChartElement = document.querySelector("#line-chart");
var chart = new Chart(getChartElement, {
	type: "line",
	data: {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
		datasets: [
			{
				label: "My First dataset",
				backgroundColor: "#efffff",
				borderColor: "#6ad9e5",
				borderWidth: 1,
				data: [34, 45, 56, 107, 5, 420, 323]
			}
		]
	},
	options: {
		showLines: true,
		legend: {
			display: true,
			labels: {
				padding: 0
			}
		},
		title: {
			display: true,
			text: "World population Per Month"
		},
		animation: {
			duration: 5000,
			easing: "easeOutQuart"
		}
	}
});

var months = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec"
];
function adddata() {
	let mountsRandom = Math.floor(Math.random() * 12);
	let randomNumber = Math.floor(Math.random() * 550);
	chart.data.datasets[0].data.push(randomNumber);
	chart.data.labels.push(months[mountsRandom]);
	chart.update();
}

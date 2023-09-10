<template>
	<div id="dataFromEchart">

	</div>
</template>

<script lang="ts" name="dataForm">
import * as echarts from 'echarts'
export default {
	data() {
		return {
		}
	},
	created() {
		setTimeout(() => {
			this.dealEchart()
		}, 1000);
	},
	methods: {
		dealEchart() {
			const data = [];
			for (let i = 0; i < 3; i++) {
				const random = Math.floor(Math.random() * (500 - 100)) + 10;
				data.push(random);
			}
			var myChart = echarts.init(document.getElementById('dataFromEchart'));
			let option = {
				grid: {
					left: "12%",
					top: "10%",
					width: "80%",
					height: "75%",
				},
				tooltip: {
					trigger: "item",
					formatter: function (params) {
						let str = "<div><p>" + params.name + "</p></div>";
						str += params.marker + params.seriesName + "：" + params.data;
						return str;
					},
					textStyle: {
						fontSize: 12,
					},
				},
				xAxis: {
					type: "category",
					data: ['13:25:00', '14:25:00', '15:25:00'],
					boundaryGap: false,
				},
				yAxis: {
					axisLine: {
						show: true
					},
					type: "value",
					axisLabel: {
						margin: 10,
						textStyle: {
							fontSize: 14,
							color: "#A9A9A9"
						},
					},
					splitLine: {
						show: false,
					},
				},
				series: [
					{
						name: '金额',
						type: 'line',
						itemStyle: {
							normal: {
								color: 'rgba(208,2,27,0.5)',
								lineStyle: {
									color: 'rgba(208,2,27,0.5)'
								}
							}
						},
						areaStyle: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
								{
									offset: 0,
									color: "rgba(208,2,27,0.5)",
								},
								{
									offset: 1,
									color: "rgba(208,2,27,0)",
								},
							]),
						},
						data
					}
				]
			};
			//
			myChart.setOption(option);
		}
	},
}
</script>
<style scoped>
#dataFromEchart {
	height: 200px;
	width: 100%;
}
</style>
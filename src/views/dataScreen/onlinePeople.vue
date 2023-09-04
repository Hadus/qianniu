<template>
	<div id="online-people">

	</div>
</template>

<script lang="ts" name="onlinePeople">
import * as echarts from 'echarts'
export default {
	data() {
		return {

		}
	},
	created() {
		console.log(echarts);
		setTimeout(() => {
			this.dealEchart()
		}, 1000);
	},
	methods: {
		dealEchart() {
			var myChart = echarts.init(document.getElementById('online-people'));
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
					axisLabel: {
						show: true
					},

					type: "value",
					splitLine: {
						//保留网格线
						show: false

					},

					axisLabel: {
						show: true,
						textStyle: {
							fontSize: 14,
							color: "#A9A9A9"
						},
					},
				},
				series: [
					{
						name: '人数',
						type: 'line',
						areaStyle: {
							color: {
								type: 'linear',

								colorStops: [  // 渐变颜色
									{
										offset: 0,
										color: 'rgba(85,111,253,0.50)',
									},
									{
										offset: 1,
										color: 'rgba(85,111,253,0.00)',
									},
								],
								global: false,
							},
						},

						data: [0, 2, 3]
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
#online-people {
	height: 200px;
	width: 100%;
}
</style>
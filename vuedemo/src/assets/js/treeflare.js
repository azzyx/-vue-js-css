import echart from 'echarts'

let treeflare = (id, data, title) => {
	let jsTree = echart.init(id, data)
	let itemStyle = {
		color: "#3E98C5",
    borderColor: '#3E98C5',
    borderWidth: 1
	}
	let option = {
		title: {
			text: title,
			top: 10,
			textStyle: {
        color: '#3E98C5',
				fontSize: 14,
				fontWeight: 0,
				wordSpacing: 44
			}
		},
		grid: {
			top: 0
		},
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: function(params) {
    		let res = '';
    		res = `<div style="color: #fff;position:relative;min-width:80px;font-size:14px;padding:8px"><span style="display:inline-block;text-decoration: none;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#3E98C5;"></span>${params.name}</div>`
    		return res;
      }
    },
    series:[
	    {
	      type: 'tree',
	      data: [data],
	      left: '20%',
	      right: '5%',
	      top: '4%',
	      bottom: '2%',
	      symbol: 'emptyCircle',
	      orient: 'horizontal',
	      label: {
	        position: 'left',
	        verticalAlign: 'middle',
	        align: 'right',
	        fontSize: 16,
	        distance: 5
	      },
	      itemStyle: itemStyle,
	      lineStyle: {
	      	color: '#ccc'
	      },
	      leaves: {
	        label: {
	          position: 'left',
	          verticalAlign: 'middle',
	          align: 'right'
	        },
	        itemStyle: itemStyle
	      },
	      expandAndCollapse: true,
	      animationDurationUpdate: 750
      }
    ]
	}
	jsTree.setOption(option);
}
export default treeflare

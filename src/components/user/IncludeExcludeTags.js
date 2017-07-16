import React from 'react'

export default function IncludeExcludeTags() {
	return (
		<div id="step_3_modifier_2">
			<div className="input-group">
				<span className="input-group-addon">Also include</span>
				<input type="text" id="step_3_modifier_also_2" />
			</div>
			<div className="input-group">
				<span className="input-group-addon">Must include</span>
				<input type="text" id="step_3_modifier_include_2" />
			</div>
			<div className="input-group">
				<span className="input-group-addon">Exclude </span>
				<input type="text" id="step_3_modifier_exclude_2" />
			</div>
		</div>
	)
}
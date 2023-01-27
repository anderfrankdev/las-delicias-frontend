const successful =`
	<div class="paymentResult" style="padding-top:3rem;">
		<div style="text-align:center;"><img width="150" height="150" src="/credit-card.svg" alt=""></div></div>
		<div style="text-align:center;">
			<strong>Thank You for your order!</strong>
		</div>
	</div>
`

const tableOrder = order => `
	<table style="width: fit-content; margin: 3rem auto;">
		<thead>
			<tr style="text-align:left;">
				<th style="padding-right: 3rem;">Order confirmation:</th>
				<th>${order.id}</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Total (${order.amount_items}):</td>
				<td>${order.amount_paid}$</td>
			</tr>
		</tbody>
		
	</table>
`

const addressView = address => `
	<div style="text-align:center;">
		<h2>Delivery address</h2>
		<p style="text-align: left; width:fit-content; margin: 0 auto;">${address.house} ${address.street} <br> ${address.city} ${address.state} ${address.zipcode} </p>
	</div>
`

const failed = `
	<div class="paymentResult" style="padding-top:3rem;">
		<div style="text-align:center;"><img width="150" height="150" src="/credit-card.svg" alt=""></div></div>
		<div style="text-align:center;">
			<strong>Thank You for your order!</strong>
		</div>
	</div>
`

export const paymentView = result => `
	${result.successful?successful:''}	
	${result.successful?tableOrder(result.order):''}	
	${result.successful?addressView(result.address):''}
	<p style="text-align:center; cursor:pointer; text-decoration:underline;color:#005;"  onclick="location.hash='#home'">Go to Home page</p>
`;
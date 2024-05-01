// imports
import React from "react";
import Transaction from "./Transaction";


function TransactionsList({ transactions, newDeleteTransaction }) {

  const deleteTransaction = (transactionId) => {
    fetch('https://bank-of-flatiron-code-challenge-slh1.onrender.com/transactions' + transactionId, {
      method: "DELETE"
    })
    newDeleteTransaction(transactionId);

  }

  
	return (
		<table className="ui celled striped padded table">
			<tbody>
				<tr>
					<th>
						<h3 className="ui center aligned header">Date</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Description</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Category</h3>
					</th>
					<th>
						<h3 className="ui center aligned header">Amount</h3>
					</th>
					<th>Action</th>
				</tr>
				{/* render a list of <Transaction> components here */}
        
				{transactions.map((transaction, id) => (
					<Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}
					/>
				))}

			</tbody>
		</table>
	);
}

export default TransactionsList;
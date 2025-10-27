function reconciliation() {

      const oldBalance = document.getElementById("old-balance");
      const loadedCash = document.getElementById("loaded-cash");
      const totalWithdrawn = document.getElementById("total-withdrawn");
      const actualCashCounted = document.getElementById("actual-cash-counted");

      const newBalance = parseInt(oldBalance.value) + parseInt(loadedCash.value) - parseInt(totalWithdrawn.value);
      const discrepancy = parseInt(actualCashCounted.value) - newBalance;

      if (discrepancy === 0) {
        alert(" ✅Reconciliation successful!");
      } else {
        alert("❌Reconciliation failed!"); 
      }


    }
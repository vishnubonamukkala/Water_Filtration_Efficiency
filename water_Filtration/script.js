document.getElementById("calculate-btn").addEventListener("click", function () {
    // Get input values
    const cIn = parseFloat(document.getElementById("cIn").value);
    const cOut = parseFloat(document.getElementById("cOut").value);
  
    // Validate inputs
    if (isNaN(cIn) || isNaN(cOut) || cIn <= 0 || cOut < 0 || cOut > cIn) {
      alert("Please enter valid concentrations where C_out ≤ C_in.");
      return;
    }
  
    // Calculate efficiency
    const efficiency = ((cIn - cOut) / cIn) * 100;
  
    // Display result
    const resultDiv = document.getElementById("result");
    const efficiencyOutput = document.getElementById("efficiency-output");
    efficiencyOutput.textContent = `The filtration efficiency is ${efficiency.toFixed(2)}%.`;
    resultDiv.style.display = "block";
  });
  
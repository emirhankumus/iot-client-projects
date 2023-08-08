document.addEventListener("DOMContentLoaded", function () {
  var ctxList = document.querySelectorAll(".chart-container canvas");

  // Her bir grafik için ayrı ayrı döngü
  ctxList.forEach(function (canvas) {
    var dataLength = 11;
    var temperatures = [];
    var times = [];

    for (var i = 0; i < dataLength; i++) {
      var temperature = Math.random() * 49 + 1; // 1 ile 50 arasında rastgele sıcaklık değerleri
      temperatures.push(Math.round(temperature)); // Sıcaklık değerlerini yuvarlayarak tam sayıya çevir
      times.push(i * 5); // 5 birimlik artışlarla y ekseninde 11 adımlı gösterilmesi (birim: adım)
    }

    var chart = new Chart(canvas, {
      type: "line",
      data: {
        labels: times,
        datasets: [
          {
            label: "Sıcaklık",
            data: temperatures,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "Zaman (sn)",
            },
          },
          y: {
            title: {
              display: true,
              text: "Sıcaklık (°C)",
            },
            suggestedMin: 0,
            suggestedMax: 50,
            stepSize: 5,
          },
        },
      },
    });

    function updateTemperature() {
      var temperatureSpans = document.querySelectorAll(".card-text span");
      temperatureSpans.forEach(function (span, index) {
        var newTemperature = Math.random() * 49 + 1; // Yeni rastgele sıcaklık değeri
        var roundedTemperature = Math.round(newTemperature); // Yuvarlayarak tam sayıya çevir

        // Sıcaklık değerini güncelle
        temperatures[index] = roundedTemperature;

        // Sıcaklık değerini p etiketinde güncelle
        span.textContent = roundedTemperature;
      });

      // Grafik verilerini güncelle
      chart.update();
    }

    // Her 5 saniyede bir sıcaklık verilerini güncelle
    setInterval(updateTemperature, 5000);

    // Başlangıçta sıcaklık verilerini ilk kez güncelle
    updateTemperature();
  });
});



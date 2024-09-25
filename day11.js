<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" disabled>
        <div>
            <button onclick="clearDisplay()">C</button>
            <button onclick="inputValue('/')">/</button>
            <button onclick="inputValue('*')">*</button>
        </div>
        <div>
            <button onclick="inputValue(7)">7</button>
            <button onclick="inputValue(8)">8</button>
            <button onclick="inputValue(9)">9</button>
            <button onclick="inputValue('-')">-</button>
        </div>
        <div>
            <button onclick="inputValue(4)">4</button>
            <button onclick="inputValue(5)">5</button>
            <button onclick="inputValue(6)">6</button>
            <button onclick="inputValue('+')">+</button>
        </div>
        <div>
            <button onclick="inputValue(1)">1</button>
            <button onclick="inputValue(2)">2</button>
            <button onclick="inputValue(3)">3</button>
            <button onclick="calculate()">=</button>
        </div>
    </div>
    <script src="main.js"></script>
</body>
</html>
class Calculator {
  constructor() {
    this.display = document.getElementById("display");
    this.buttons = document.querySelectorAll(".button");
    this.lingButton = document.getElementById("ling");
    this.dengButton = document.getElementById("deng");
    this.currentInput = "";

    this.init();
  }

  init() {
    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.suan(button.textContent));
    });

    this.lingButton.addEventListener("click", () => this.kong());
    this.dengButton.addEventListener("click", () => this.deng());
  }
  suan(value) {
    if (value === "=") {
      this.deng();
    } else if (value === "C") {
      this.kong();
    } else if (value === "←") {
      // 处理删除一个字符
      this.currentInput = this.currentInput.slice(0, -1);
      this.display.value = this.currentInput;
    } else {
      this.currentInput += value;
      this.display.value = this.currentInput;
    }
  }

  deng() {
    try {
      const result = eval(this.currentInput);
      this.display.value = result;
      this.currentInput = result.toString();
    } catch (error) {
      this.display.value = "Error";
      this.currentInput = "";
    }
  }

  kong() {
    this.currentInput = "";
    this.display.value = "";
  }
}

const calculator = new Calculator();

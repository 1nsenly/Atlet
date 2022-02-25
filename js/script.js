let dino = document.querySelector(".runner");
let runner_img = document.querySelector(".runner_img");
let runner1 = "runner/runner_1.png";
let runner2 = "runner/runner_2.png";
let runner3 = "runner/runner_3.png";
let runner4 = "runner/runner_4.png";
let runners = [runner1, runner2, runner3, runner4];
let leftPos = 0;
let jump = 300;
runner.style.left = leftPos + "px";
runner.style.top = jump + "px";

function getRandomRunner() {
	const length = runners.length;
	const index = Math.floor(Math.random() * length);
	const runner = runners[index];
	return runner;
}

document.addEventListener("keydown", function (event) {
	if (event.keyCode == 39) {
		runner_img.src = getRandomRunner();
		leftPos += 50;
		runner.style.left = leftPos + "px";
	}

	if (event.keyCode == 37) {
		runner_img.src = getRandomRunner();
		leftPos -= 50;
		runner.style.left = leftPos + "px";
	}
	if (event.keyCode == 37) {
		runner.style.transform = "scaleX(-1)";
	}
	if (event.keyCode == 39) {
		runner.style.transform = "scaleX(1)";
	}
	if (event.keyCode == 40) {
		jump += 40;
		runner.style.top = jump + "px";
	}
	if (event.keyCode == 38) {
		jump -= 40;
		runner.style.top = jump + "px";
	}
});

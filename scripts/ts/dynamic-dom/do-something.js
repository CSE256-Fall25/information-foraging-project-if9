export function doSomething() {
	console.log("Put some code in here!");
}

export function showTab(tabId, link) {
	// Remove active from all tabs and content
	document.querySelectorAll(".tab-link").forEach(l => l.classList.remove("active"));
	document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

	// Activate clicked tab
	link.classList.add("active");

	// Show correct content
	document.getElementById(tabId).classList.add("active");
}

window.showTab = showTab;
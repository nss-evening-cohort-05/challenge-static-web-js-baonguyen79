
function startBuild (e)
{
	e.preventDefault();

	var pineTree = {
		treeHeight: document.getElementById("height").value,
		treeChar: document.getElementById("character").value
	}

	buildTree(pineTree);
}

// function to build tree
function buildTree(tree)
{
	var height = parseInt(tree.treeHeight);
	var char = tree.treeChar;

	var treeStr = " ";

	for (var i = 0; i < height; i++)
	{
		// add spaces	
		for (var s = 0; s < height - i; s++)
		  {	treeStr += " ";}
			// add characters	
			for (var c = 0; c < ((2 * i) + 1); c++)
				{treeStr += char;}

		console.log(treeStr);
		treeStr = " ";
	}
}


document.getElementById("build").addEventListener("click", startBuild);
document.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		startBuild(e);
	}
});
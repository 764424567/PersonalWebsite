function jianli()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/jianli/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function img1()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/img1/img_2.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function img2()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/img2/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function img3()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/img3/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function img4()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/img4/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function img5()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/img5/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_DemoProject()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_DemoProject/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_Model()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_Model/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_Plugin()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_Plugin/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_ProjectCode()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_ProjectCode/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_Texture()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_Texture/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_Tool()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_Tool/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_Video()
{
	document.getElementById("control").innerHTML="";
	document.getElementById("iframe").src="./iframeHTML/Assets_Video/index.html";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
}

function Assets_Plugin_Detail(par)
{
	document.getElementById("controlVideo").innerHTML="";
	document.getElementById("iframe").width="100%";
	document.getElementById("iframe").height="880";
	switch(par)
	{
		case "Video":
		document.getElementById("iframe").src="./DetailHtml/index_Video.html";
		break;
		case "Path":
		document.getElementById("iframe").src="./DetailHtml/index_Path.html";
		break;
		case "AR":
		document.getElementById("iframe").src="./DetailHtml/index_AR.html";		
		break;
		case "DOTween":
		document.getElementById("iframe").src="./DetailHtml/index_DOTween.html";		
		break;
		case "Touch":
		document.getElementById("iframe").src="./DetailHtml/index_Touch.html";		
		break;
		case "KGF":
		document.getElementById("iframe").src="./DetailHtml/index_KGF.html";		
		break;
		case "iTween":
		document.getElementById("iframe").src="./DetailHtml/index_iTween.html";		
		break;
		case "Particle":
		document.getElementById("iframe").src="./DetailHtml/index_Particle.html";		
		break;
	}
}


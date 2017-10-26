var projectSectionList = document.getElementsByClassName( "projectSection" );
makeAllProjects();

for( var i = 0; i < projectSectionList.length; i++ )
{
	var thisSection = projectSectionList[ i ];
	thisSection.addEventListener( "mouseenter", animateProjectIn );
	thisSection.addEventListener( "mouseleave", animateProjectOut );
}

function animateProjectIn()
{
	var section = this;
	var allElements = section.children;
	var sidePhotos = [];
	var info = allElements[ allElements.length - 1 ];

	for( var i = 0; i < allElements.length; i++ )
	{
		if( allElements[ i ].className == "sidePhoto" )
		{
			sidePhotos.push( allElements[ i ] );
		}	
	}

	var tl = new TimelineMax( {delay: 0, repeat: 0} );
	tl.to( sidePhotos, 0.35, {ease: Power0.easeNone, opacity: 1, visibility: "visible"} );
	tl.to( info, 1, {ease: Power2.easeIn, opacity: 1, visibility: "visible"}, "-=0.25" );
}

function animateProjectOut()
{
	var section = this;
	var allElements = section.children;
	var sidePhotos = [];
	var info = allElements[ allElements.length - 1 ];

	for( var i = 0; i < allElements.length; i++ )
	{
		if( allElements[ i ].className == "sidePhoto" )
		{
			sidePhotos.push( allElements[ i ] );
		}	
	}

	var tl = new TimelineMax( {delay: 0, repeat: 0} );
	tl.to( sidePhotos, 0.20, {ease: Power0.easeOut, opacity: 0, visibility: "hidden"} );
	tl.to( info, 1, {ease: Power0.easeOut, opacity: 0, visibility: "hidden"}, "-=0.15" );
}

function makeAllProjects()
{
	var desc1 = "An Abstract Program Reflecting on Equality"
	makeNewProject( "A Story of Black and White", "sobaw", desc1 );

	var desc2 = "A Basic Escape Game With Different Obstacles"
	makeNewProject( "BlockIT", "bi", desc2 );

	var desc3 = "A Conceptual Website Using NYTimes Articles as a Memoir"
	makeNewProject( "My Beautiful Grey Twisted Reality", "mbgtr", desc3 );

	var desc4 = "A Personal Blog Organized by Type and Tone of Subject Matter"
	makeNewProject( "Nigmatic World", "nw", desc4 );

	var desc5 = "An iOS Whack-A-Mole Game with Various Modes"
	makeNewProject( "Touch Adventure", "ta", desc5 );
}

function makeNewProject( title, fileName, desc )
{
	var theNewSection = cloneSection( projectSectionList[ 0 ] );
	changeSectionName( theNewSection, title );
	changeSectionPhotos( theNewSection, fileName );
	changeSectionInfo( theNewSection, desc );
}

function changeSectionInfo( section, desc )
{
	var allChildren = section.children;
	var infoElement = allChildren[ allChildren.length - 1 ];
	infoElement.innerHTML = desc;
}

function changeSectionPhotos( section, name )
{
	var allElements = section.children;
	for( var i = 1; i < allElements.length - 1; i++ )
	{
		var baseFile = "data/img/";
		var baseName = createFileName( name, i, ".jpg" );
		var theFile = baseFile + baseName;
		var theElement = allElements[ i ];
		theElement.setAttribute( "src", theFile );
		console.log( theElement );
	}
}

function createFileName( baseName, addedStr, extension )
{
	var fileName = baseName + addedStr;
	return fileName += extension;
}

function changeSectionName( section, name )
{
	var titleElement = section.children[ 0 ];
	titleElement.innerHTML = name;
}

function cloneSection( section )
{
	var theParent = section.parentElement;
	var theNewSection = section.cloneNode( true );
	theParent.appendChild( theNewSection );
	return theNewSection;
}



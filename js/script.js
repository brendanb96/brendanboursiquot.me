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
	var desc0 = "A Compilation of Most Recent Works + 1 Draft Process (Adobe Suite)"
	makeNewProject( "[Visual Designs]", "portvisual", desc0 );

	var desc1 = "A Robotron: 2084 Remake/Sequel - New Modes/Enemy (GameMaker 2/GML)"
	makeNewProject( "Robotron: 2094 (SuperTron)", "st", desc1 );

	var desc2 = "An Abstract Program Reflecting on Equality (Processing/Java)"
	makeNewProject( "A Story of Black and White", "sobaw", desc2 );

	var desc3 = "A Basic Escape Game With Different Obstacles (P5.js/JavaScript)"
	makeNewProject( "BlockIT", "bi", desc3 );

	var desc4 = "A Conceptual Website Using Articles as a Memoir (JavaScript/NYTimes API)"
	makeNewProject( "My Beautiful Grey Twisted Reality", "mbgtr", desc4 );

	var desc5 = "A Personal Blog Organized by Type and Tone of Subject Matter (JavaScript)"
	makeNewProject( "Nigmatic World", "nw", desc5 );

	var desc6 = "An iOS Whack-A-Mole Game with Various Modes (GameSalad)"
	makeNewProject( "Touch Adventure", "ta", desc6 );
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



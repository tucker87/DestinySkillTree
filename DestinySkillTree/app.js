var currentClass;
var currentSubClass;
function onLoad() {
    buildClassList();
    currentClass = classes[0];
    chooseClass(currentClass.name);
}

function buildClassList() {
    $.each(classes, function(key, cClass) {
        $("#classList").append(classLink(cClass.name));
    });
}

function classLink(className) {
    return '<input type="button" class="classButton" value="' + className + '" onclick="chooseClass(\'' + className + '\')"/>';
    //return '<span onclick="chooseClass(' + className + ')">' + className +'</span>';
}

function chooseClass(className) {
    clearSubClasses();
    addSubClasses(className);
    currentClass = classes[getClassIndex(className)];
    var firstSubClass = currentClass.subClasses[0];
    updateAll(firstSubClass);
}

function updateAll(subClass) {
    updateTalentsTable(subClass.name);
    updateClassIcon(subClass.image);
    updateClassName(subClass.name);
    updateClassDesc(subClass.description);
    updateClassAttr(subClass.stats);
}

function updateClassAttr(stats) {
    $("#armor").css('width', stats.armor * 2);
    $("#recovery").css('width', stats.recovery * 2);
    $("#agility").css('width', stats.agility * 2);
}

function updateClassIcon(subClassImage) {
    $("#classIcon").attr('src', subClassImage);
}

function updateClassName(className) {
    var classNameDiv = $('#classDesc');
    classNameDiv.children().remove('.className');
    classNameDiv.append($('<span></span>')
        .html(className)
        .attr('class', "className"));
}

function clearSubClasses() {
    $("#subClassList").children().remove();
}

function addSubClasses(className) {
    var classIndex = getClassIndex(className);
    $.each(classes[classIndex].subClasses, function (key, sClass) {
        $("#subClassList").append(subClassLink(sClass.name));
    });
}

function subClassLink(subClassName) {
    return '<input type="button" class="classButton" value="' + subClassName + '" onclick="chooseSubClass(\'' + subClassName + '\')"/>';
    //return '<span onclick="chooseSubClass(' + subClassName + ')">' + subClassName + '</span>';
}

function chooseSubClass(subClassName) {
    currentSubClass = currentClass.subClasses[getSubClassIndex(subClassName)];
    updateAll(currentSubClass);
}

function updateClassDesc(desc) {
    var classNameDiv = $('#classDesc');
    classNameDiv.children().remove('.classDescText');
    classNameDiv.append($('<span></span>')
        .html(desc)
        .attr('class', "classDescText"));
}

function updateTalentsTable(subClassName) {
    $("#classTalents > tbody:last").children().remove();
    
    var subClass = currentClass.subClasses[getSubClassIndex(subClassName)];
    var talentTable = $("#classTalents > tbody:last");
    var xOffset = 20;
    var yOffset = 10;


    $.each(subClass.skills, function (rowKey, row) {
        talentTable.append($('<tr></tr>'));
            $.each(row, function(columnKey, column) {
                talentTable.find('tr').last()
                    .append($('<td></td>')
                        .attr('row', rowKey)
                        .attr('col', columnKey)
                        .attr('onclick', "selectTalent(this)")
                        .attr('class', "talent")
                        .append($('<img></img>')
                            .prop('src', column.image)
                            .attr('class', "talentImg")
                            .hover(function () {
                                $('#talentTitle').html(column.name);
                                $('#talentDesc').html(column.description);
                                $('#talentPopup').stop(true,true).fadeIn();
                            }, function() {
                                $('#talentPopup').stop(true,true).fadeOut();
                            })
                            .mousemove(function(e) {
                                $('#talentPopup').css('top', e.pageY + yOffset).css('left', e.pageX + xOffset);
                            })
                        ));
            });
    });

    indentLastRow(talentTable);
    selectBasicTalents(talentTable);
}

function getClassIndex(className) {
    return classes.map(function(e) { return e.name; }).indexOf(className);
}

function getSubClassIndex(subClassName) {
    return currentClass.subClasses.map(function (e) { return e.name; }).indexOf(subClassName);
}

function indentLastRow(talentTable) {
    talentTable.find('tr').last().prepend($('<td></td>').attr('col', -1));
    talentTable.find('tr').last().find('td').each(function(cKey, c) {
        c = $(c);
        c.attr('col', parseInt(c.attr('col')) + 1);
    });
}

function selectBasicTalents(talentTable) {
    var firstRow = talentTable.find('tr').eq(0);
    firstRow.children().eq(1).addClass("selected");
    firstRow.children().eq(2).addClass("selected");
    firstRow.children().eq(3).addClass("selected");
}

function selectTalent(talent) {
    talent = $(talent);
    var row = talent[0].attributes["row"].value;
    var col = talent[0].attributes["col"].value;

    if (isLockedCell(row, col)) return;

    unSelectColumn(col);
    if (isSelectedCell(talent)) {
        
    }

    talent.addClass("selected");
}

function isSelectedCell(talent) {
    return (talent[0].className.search("selected") >= 0);
}

function unSelectColumn(col) {
    $.each($("#classTalents > tbody:last > tr"), function(rowKey, row) {
        if(!isLockedCell(rowKey, col))
            $(row).children().eq(col).removeClass("selected");
    });
}

function isLockedCell(row, col) {
    return (row == 0 && col >= 1 && col <= 3);
}
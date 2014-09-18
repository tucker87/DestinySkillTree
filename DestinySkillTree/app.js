var currentClass;
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
    return '<input type="button" value="' + className + '" onclick="chooseClass(\'' + className + '\')"/>';
    //return '<span onclick="chooseClass(' + className + ')">' + className +'</span>';
}

function chooseClass(className) {
    clearSubClasses();
    addSubClasses(className);
    currentClass = classes[getClassIndex(className)];
    updateTalentsTable($("#subClassList").children()[0].value);
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
    return '<input type="button" value="' + subClassName + '" onclick="chooseSubClass(\'' + subClassName + '\')"/>';
    //return '<span onclick="chooseSubClass(' + subClassName + ')">' + subClassName + '</span>';
}

function chooseSubClass(subClassName) {
    updateTalentsTable(subClassName);
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
                        .append($('<img></img>')
                            .prop('src', column.image)
                            .hover(function (e) {
                                $('#talentTitle').html(column.name);
                                $('#talentDesc').html(column.description);
                                $('#talentPopup').show();
                            }, function() {
                                $('#talentPopup').hide();
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
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof graphpage == 'undefined') { var graphpage = {}; }


graphpage.start = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="COMMON_MSG" style="display: none"><span id="httpRequestError">Es gab ein Problem während der HTTP Anfrage.</span><span id="linkAlert">Blöcke mit diesem Link teilen:\n\n%1</span><span id="hashError">Entschuldigung, konnte die gespeicherten Blöcke für \'%1\' nicht finden.</span><span id="xmlError">Kann Sicherungsdatei nicht laden.  Diese wurde vermutlich mit einer veralteten Version von Blockly erstellt?</span></div><table width="100%"><tr><td><h1><span id="title"><a href="../index.html">Blockly</a> : Graph</span></h1></td><td class="farSide"><select id="languageMenu" onchange="BlocklyApps.changeLanguage();"></select>&nbsp; &nbsp;<button id="linkButton" title="Blöcke abspeichern und Link erzeugen." onclick="BlocklyStorage.link();"><img src=\'link.png\' height=21 width=21></button></div></td></tr></table><div id="visualization"></div><div id="funcText"><img id="y1" src="../../media/1x1.gif">...</div><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + graphpage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
};


graphpage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Mathe"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><title name="NUM">1</title></block></value><value name="HIGH"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><title name="NUM">1</title></block></value><value name="TO"><block type="math_number"><title name="NUM">100</title></block></value></block><block type="math_random_float"></block></category><category name="Variablen"><block type="graph_get_x"></block></category><category name="Logik"><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category></xml>';
};

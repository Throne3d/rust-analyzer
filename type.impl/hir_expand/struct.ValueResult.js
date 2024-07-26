(function() {var type_impls = {
"hir_expand":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_expand::ExpandResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_expand::ExpandResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-Default-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","hir_expand::ExpandResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CResult%3CT,+E%3E%3E-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-From%3CResult%3CT,+E%3E%3E-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;&gt; for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(result: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Result<T, E>>","hir_expand::ExpandResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-PartialEq-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_expand::ExpandResult"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.new\" class=\"fn\">new</a>(value: T, err: E) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h4></section><section id=\"method.ok\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.ok\" class=\"fn\">ok</a>(value: T) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h4></section><section id=\"method.only_err\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.only_err\" class=\"fn\">only_err</a>(err: E) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section><section id=\"method.zip_val\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.zip_val\" class=\"fn\">zip_val</a>&lt;U&gt;(self, other: U) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.tuple.html\">(T, U)</a>, E&gt;</h4></section><section id=\"method.map\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.map\" class=\"fn\">map</a>&lt;U&gt;(self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;U, E&gt;</h4></section><section id=\"method.map_err\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.map_err\" class=\"fn\">map_err</a>&lt;E2&gt;(self, f: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(E) -&gt; E2) -&gt; <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E2&gt;</h4></section><section id=\"method.result\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"hir_expand/struct.ValueResult.html#tymethod.result\" class=\"fn\">result</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;T, E&gt;</h4></section></div></details>",0,"hir_expand::ExpandResult"],["<section id=\"impl-Eq-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-Eq-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,</div></h3></section>","Eq","hir_expand::ExpandResult"],["<section id=\"impl-StructuralPartialEq-for-ValueResult%3CT,+E%3E\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-ValueResult%3CT,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"hir_expand/struct.ValueResult.html\" title=\"struct hir_expand::ValueResult\">ValueResult</a>&lt;T, E&gt;</h3></section>","StructuralPartialEq","hir_expand::ExpandResult"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()
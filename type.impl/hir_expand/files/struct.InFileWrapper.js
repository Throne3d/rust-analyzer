(function() {var type_impls = {
"hir_expand":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-Clone-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-Debug-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Hash-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-Hash-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#method.hash\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html#tymethod.hash\" class=\"fn\">hash</a>&lt;__H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>&gt;(&amp;self, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;mut __H</a>)</h4></section></summary><div class='docblock'>Feeds this value into the given <a href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html#tymethod.hash\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.hash_slice\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.3.0\">1.3.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/hash/mod.rs.html#238-240\">source</a></span><a href=\"#method.hash_slice\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html#method.hash_slice\" class=\"fn\">hash_slice</a>&lt;H&gt;(data: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.slice.html\">[Self]</a>, state: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;mut H</a>)<div class=\"where\">where\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\">Hasher</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Feeds a slice of this type into the given <a href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hasher.html\" title=\"trait core::hash::Hasher\"><code>Hasher</code></a>. <a href=\"https://doc.rust-lang.org/1.80.0/core/hash/trait.Hash.html#method.hash_slice\">Read more</a></div></details></div></details>","Hash","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileId,+%26N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#189-194\">source</a><a href=\"#impl-InFileWrapper%3CFileId,+%26N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, N: AstNode&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileId, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;N</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.syntax_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#191-193\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.syntax_ref\" class=\"fn\">syntax_ref</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileId, &amp;SyntaxNode&gt;</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileId,+N%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#183-187\">source</a><a href=\"#impl-InFileWrapper%3CFileId,+N%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileId: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, N: AstNode&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileId, N&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.syntax\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#184-186\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.syntax\" class=\"fn\">syntax</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileId, &amp;SyntaxNode&gt;</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileId,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#177-181\">source</a><a href=\"#impl-InFileWrapper%3CFileId,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileId: FileIdToSyntax, T&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileId, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.file_syntax\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#178-180\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.file_syntax\" class=\"fn\">file_syntax</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; SyntaxNode</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileKind,+%26T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#119-123\">source</a><a href=\"#impl-InFileWrapper%3CFileKind,+%26T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;T</a>&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.cloned\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#120-122\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.cloned\" class=\"fn\">cloned</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileKind,+Either%3CL,+R%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#145-152\">source</a><a href=\"#impl-InFileWrapper%3CFileKind,+Either%3CL,+R%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind, L, R&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.transpose\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#146-151\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.transpose\" class=\"fn\">transpose</a>(\n    self,\n) -&gt; <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;<a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, L&gt;, <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, R&gt;&gt;</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileKind,+Option%3CT%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#139-143\">source</a><a href=\"#impl-InFileWrapper%3CFileKind,+Option%3CT%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind, T&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.transpose\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#140-142\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.transpose\" class=\"fn\">transpose</a>(self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;&gt;</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#102-117\">source</a><a href=\"#impl-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, T&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.with_value\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#103-105\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.with_value\" class=\"fn\">with_value</a>&lt;U&gt;(&amp;self, value: U) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, U&gt;</h4></section><section id=\"method.as_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#107-109\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;T</a>&gt;</h4></section><section id=\"method.borrow\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#111-116\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.borrow\" class=\"fn\">borrow</a>&lt;U&gt;(&amp;self) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;U</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;U&gt;,</div></h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#92-100\">source</a><a href=\"#impl-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind, T&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#93-95\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.new\" class=\"fn\">new</a>(file_id: FileKind, value: T) -&gt; Self</h4></section><section id=\"method.map\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#97-99\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.map\" class=\"fn\">map</a>&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(T) -&gt; U, U&gt;(self, f: F) -&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, U&gt;</h4></section></div></details>",0,"hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CHirFileId,+FileAstId%3CN%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#66-79\">source</a><a href=\"#impl-InFileWrapper%3CHirFileId,+FileAstId%3CN%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;N: AstIdNode&gt; <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;<a class=\"struct\" href=\"hir_expand/struct.HirFileId.html\" title=\"struct hir_expand::HirFileId\">HirFileId</a>, FileAstId&lt;N&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.to_node\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#67-69\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.to_node\" class=\"fn\">to_node</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; N</h4></section><section id=\"method.to_range\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#70-72\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.to_range\" class=\"fn\">to_range</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; TextRange</h4></section><section id=\"method.to_in_file_node\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#73-75\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.to_in_file_node\" class=\"fn\">to_in_file_node</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; <a class=\"type\" href=\"hir_expand/files/type.InFile.html\" title=\"type hir_expand::files::InFile\">InFile</a>&lt;N&gt;</h4></section><section id=\"method.to_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#76-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.to_ptr\" class=\"fn\">to_ptr</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; AstPtr&lt;N&gt;</h4></section></div></details>",0,"hir_expand::files::InFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InFileWrapper%3CHirFileId,+Idx%3CSyntaxNodePtr%3CRustLanguage%3E%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#83-90\">source</a><a href=\"#impl-InFileWrapper%3CHirFileId,+Idx%3CSyntaxNodePtr%3CRustLanguage%3E%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;<a class=\"struct\" href=\"hir_expand/struct.HirFileId.html\" title=\"struct hir_expand::HirFileId\">HirFileId</a>, Idx&lt;SyntaxNodePtr&lt;RustLanguage&gt;&gt;&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.to_range\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#84-86\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.to_range\" class=\"fn\">to_range</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; TextRange</h4></section><section id=\"method.to_ptr\" class=\"method\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#87-89\">source</a><h4 class=\"code-header\">pub fn <a href=\"hir_expand/files/struct.InFileWrapper.html#tymethod.to_ptr\" class=\"fn\">to_ptr</a>(&amp;self, db: &amp;dyn <a class=\"trait\" href=\"hir_expand/db/trait.ExpandDatabase.html\" title=\"trait hir_expand::db::ExpandDatabase\">ExpandDatabase</a>) -&gt; SyntaxNodePtr</h4></section></div></details>",0,"hir_expand::files::InFile"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-PartialEq-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<section id=\"impl-Copy-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-Copy-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section>","Copy","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<section id=\"impl-Eq-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-Eq-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section>","Eq","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"],["<section id=\"impl-StructuralPartialEq-for-InFileWrapper%3CFileKind,+T%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hir_expand/files.rs.html#23\">source</a><a href=\"#impl-StructuralPartialEq-for-InFileWrapper%3CFileKind,+T%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;FileKind, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"hir_expand/files/struct.InFileWrapper.html\" title=\"struct hir_expand::files::InFileWrapper\">InFileWrapper</a>&lt;FileKind, T&gt;</h3></section>","StructuralPartialEq","hir_expand::files::InFile","hir_expand::files::InMacroFile","hir_expand::files::InRealFile"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()
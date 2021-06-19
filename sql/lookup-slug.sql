select
	max(i.gematria, i.gematria_iota) as gematria,
	w.weight,
	v.ref as verse,
	v.text,
	i.pronounce_sbl,
	i.pronounce_dic,
	i.text_original,
	i.text_plain,
	i.text_slug,
	i.text_english as word,
	i.strongs,
	v.verse_id
from interlinear i
left join verses v on i.verse_id = v.verse_id and v.edition = ?
left join weights w on i.word_id = w.word_id
where text_slug = ? or text_slug = ?
order by weight desc, i.word_id
;

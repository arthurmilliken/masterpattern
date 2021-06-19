select
	e.gematria,
	e.total_weight weight,
	e.text_plain,
	e.text_slug,
	e.strongs,
	s.translit,
	s.pronounce,
	s.strongs_def,
	s.kjv_def,
	s.derivation
from word_entries e
left join strongs s on e.strongs = s.strongs_id
where gematria = ?
order by total_weight desc
;
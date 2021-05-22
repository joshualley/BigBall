package dto

type Rank struct {
	Seq    int    `gorm:"column:seq"`
	Name   string `gorm:"column:name"`
	Weight int64  `gorm:"column:weight"`
}

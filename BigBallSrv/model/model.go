package model

type User struct {
	ID        int64  `gorm:"column:id"`
	Name      string `gorm:"column:name"`
	AvatarUrl string `gorm:"avatar_url"`
}

func (u *User) TableName() string {
	return "User"
}

type Record struct {
	ID      int64   `gorm:"column:id"`
	UID     int64   `gorm:"column:uid"`
	Weight  float64 `gorm:"column:weight"`
	MaxTime int64   `gorm:"column:max_time"`
}

func (r *Record) TableName() string {
	return "Record"
}

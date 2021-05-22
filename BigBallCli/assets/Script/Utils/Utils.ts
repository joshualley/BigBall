
export default class Utils {
    public static ShowError(title: string) {
        wx.showToast({
            title: title,
            icon: 'error',
            duration: 2000
        });
    }

    public static ShowInfo(title: string) {
        wx.showToast({
            title: title,
            icon: 'none',
            duration: 2000
        });
    }

    public static ShowSuccess(title: string) {
        wx.showToast({
            title: title,
            icon: 'success',
            duration: 2000
        });
    }
}

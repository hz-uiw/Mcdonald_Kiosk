import { api } from "../configs/axiosConfig";

// 메뉴 데이터를 가져오는 함수
export const fetchMenuData = async () => {
    const response = await api.get("/api/user/menu");

    // 받아온 데이터 가공 (menuPrice를 size 기준으로 정렬)
    const sortedData = response.data.map((item) => ({
        ...item,
        menuPrice: item.menuPrice.sort((a, b) => {
            const sizeOrder = ["M", "L"];  // 원하는 size 순서 정의
            return sizeOrder.indexOf(a.size) - sizeOrder.indexOf(b.size);  // M이 L보다 먼저 오도록 정렬
        })
    }));

    return sortedData;
};

// 관리자용 전체 메뉴 목록 가져오기
export const adminFetchMenuApi = async () => {
    try {
        const response = await api.get("/api/admin/menus");
        return response.data;
    } catch (error) {
        console.error("[adminFetchMenuApi] API 요청 실패:", error);
        throw error;
    }
};

// 특정 메뉴 상세 정보 가져오기
export const fetchMenuDetailApi = async (menuId) => {
    if (!menuId) {
        console.warn("[fetchMenuDetail] menuId가 없습니다.");
        return null;
    }

    try {
        const response = await api.get(`/api/admin/menus/${menuId}`);
        console.log(`[fetchMenuDetail] 선택한 메뉴(${menuId}) 응답:`, response.data);
        return response.data;
    } catch (error) {
        console.error("[fetchMenuDetail] API 요청 실패:", error);
        throw error;
    }
};

// 메뉴 추가
export const addMenuApi = async (formData) => {
    const token = localStorage.getItem("AccessToken");
    if (!token) throw new Error("인증 정보 없음!");

    const validPrices = formData.prices
        .filter((p) => p.price && Number(p.price) > 0)
        .map((p) => ({
            size: p.size,
            menuPrice: Number(p.price),
            discountPrice: p.discountPrice ? Number(p.discountPrice) : Number(p.price),
        }));

    const payload = {
        menuName: formData.menuName,
        menuNameEng: formData.menuNameEng,
        menuCategory: formData.menuCategory,
        menuSequence: formData.menuSequence,
        singleImg: formData.singleImg,
        setImg: formData.setImg,
        isExposure: formData.isExposure,
        prices: validPrices,
    };

    try {
        const response = await api.post("/api/admin/menus", payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("[addMenuApi] 실패:", error);
        throw error;
    }
};

// 메뉴 수정
export const updateMenuApi = async (menuId, formData) => {
    const token = localStorage.getItem("AccessToken");
    if (!token) throw new Error("인증 정보 없음!");

    const validPrices = formData.prices
        .filter((p) => p.price && Number(p.price) > 0)
        .map((p) => ({
            size: p.size,
            menuPrice: Number(p.price),
            discountPrice: p.discountPrice ? Number(p.discountPrice) : Number(p.price),
        }));

    const payload = {
        menuName: formData.menuName,
        menuNameEng: formData.menuNameEng,
        menuCategory: formData.menuCategory,
        menuSequence: formData.menuSequence,
        singleImg: formData.singleImg,
        setImg: formData.setImg,
        isExposure: formData.isExposure,
        prices: validPrices,
    };

    try {
        const response = await api.put(`/api/admin/menus/${menuId}`, payload, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("[updateMenuApi] 실패:", error);
        throw error;
    }
};

// 메뉴 삭제
export const deleteMenuApi = async (menuId) => {
    const token = localStorage.getItem("AccessToken");
    if (!token) throw new Error("인증 정보 없음!");

    const response = await api.delete(`/api/admin/menus/${menuId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
};

// 페이지네이션용 이미지 목록
export const fetchAllMenuImages = async () => {
    const response = await api.get("/api/admin/menus/images");
    return response.data;
};
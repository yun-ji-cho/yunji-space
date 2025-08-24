import { NextRequest, NextResponse } from "next/server";
import { ContactForm, ApiResponse } from "@/types/project";
import { isValidEmail } from "@/lib/utils";

export async function POST(request: NextRequest) {
  try {
    const body: ContactForm = await request.json();

    // 유효성 검사
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.subject ||
      !body.message
    ) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "모든 필드를 입력해주세요.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json<ApiResponse<null>>(
        {
          success: false,
          error: "유효한 이메일 주소를 입력해주세요.",
        },
        { status: 400 }
      );
    }

    // 실제로는 여기서 이메일 발송 로직을 구현
    // 예: Nodemailer, SendGrid, Resend 등 사용

    console.log("Contact form submission:", body);

    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: "메시지가 성공적으로 전송되었습니다!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json<ApiResponse<null>>(
      {
        success: false,
        error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      },
      { status: 500 }
    );
  }
}
